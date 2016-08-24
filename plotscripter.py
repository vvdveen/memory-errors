#!/usr/bin/python

import os
import datetime
import xml.etree.ElementTree
import sys
import re
import collections
import gzip
import urllib
import logging
import time
import subprocess

from email.utils import parsedate

base = '.'

year_start = 1988
steps = [1,2,3]


# build_path contains the partial gnuplot scripts
builder_path      = os.path.join(base, 'builder')
# intermediate_path will contain the built gnuplot scripts and data files {vulns|exploits}.dat
intermediate_path = os.path.join(base, 'intermediate')
# output_path will contain the output files
output_path       = os.path.join(base, 'output')

logfile           = os.path.join(base, 'log')

header  = os.path.join(builder_path, 'header.plot')
f_vulns = os.path.join(intermediate_path, 'vulns.dat')
f_explo = os.path.join(intermediate_path, 'exploits.dat')

datec = re.compile('(\d{4}-\d{2})')
explc = re.compile('.*(\d+)')

webc   = re.compile('php|sql|xss', re.IGNORECASE)
stackc = re.compile('stack-based|stack overflow', re.IGNORECASE)
heapc  = re.compile('heap-based|heap overflow|use[- ]after[- ]free|double free', re.IGNORECASE)
intc   = re.compile('integer|signedness|off[- ]by[- ]one', re.IGNORECASE)
pointc = re.compile('dereference|dangling pointer', re.IGNORECASE)
fmtc   = re.compile('format string', re.IGNORECASE)
otherc = re.compile('overflow', re.IGNORECASE)

exploitdb_entries = []

vulns = collections.defaultdict(lambda: collections.defaultdict(int))
explo = collections.defaultdict(lambda: collections.defaultdict(int))

def system(args, env = None):
    p = subprocess.Popen(args, stdout = subprocess.PIPE, stderr = subprocess.PIPE, env = env)
    out, err = p.communicate()
    return out, err, p.returncode

def download(url, local, is_gzipped):
    modified_local = -1 
    modified_remote = 0

    if is_gzipped:
        url = url + '.gz'

    # get last-modified remote
    headers = urllib.urlopen(url).info().headers
    for header in headers:
        if 'Last-Modified' in header:
            modified_remote = time.mktime(parsedate(header.strip('Last-Modified: ').strip('\r\n')))

    # get last-modified local (if any)
    try:             modified_local = os.path.getmtime(local)
    except os.error: modified_local = -1

    # only download if last-modified differs
    if modified_local < modified_remote:
        logger.info("Downloading " + url)

        if (is_gzipped):
            urllib.urlretrieve(url, local + ".gz")
	    
            # gunzip
    	    in_f  = gzip.open(local + ".gz", "rb")
            out_f = open(local, 'wb')
            out_f.write(in_f.read() )
            in_f.close()
            out_f.close()
        else:
            urllib.urlretrieve(url, local)
	
    else:
        logger.info("Not downloading " + url + " - already got " + local)


def inc_vmem(date, key, exploit):
    vulns[date][key]   += 1
    vulns[date]['mem'] += 1
    explo[date][key]   += exploit
    explo[date]['mem'] += exploit

def inc_emem(date, key):
    explo[date][key]   += 1
    explo[date]['mem'] += 1

def dump(filename, results, step):
    current_year  = datetime.date.today().year
    current_month = datetime.date.today().month

    print 'step: ' + str(step)

    f = open(filename,'w')
    print >>f, "%10s %10s %10s %10s %10s %10s %10s %10s %10s %10s" % \
              ("#yyyy-mm","stack","heap","int", "pointers","fmt","other","mem","all","web")

    for year in range(year_start, current_year + 1):
        for month in range(1, 12 + 1, step):

            if year == current_year and month >= current_month: return

            dates = []
            for i in range(0, step):
                dates.append("%04d-%02d" % (year, month+i))
        
            print >>f, "%10s" % dates[-1],
            for key in 'stack', 'heap', 'int', 'point', 'fmt', 'other', 'mem', 'all', 'web':
                print >>f, "%10d" % sum([results[x][key] for x in dates]),
            print >>f, ""

def parse_xml(filename):
    tree = xml.etree.ElementTree.parse(filename)
    root = tree.getroot()

    for entry in root.iter('{http://scap.nist.gov/schema/feed/vulnerability/2.0}entry'):
        summary = ''
        date    = ''
        exploit = 0

        for child in entry:
            if 'summary'            in child.tag: summary = child.text
            if 'published-datetime' in child.tag: date    = datec.search(child.text).group(1)

            for reference in child.iter('{http://scap.nist.gov/schema/vulnerability/0.4}reference'):
                if 'exploit-db' in str(reference.attrib):
                    exploit = 1
                    try:
                        exploitdb_entries.append( explc.search(reference.text).group(1) )
                    except AttributeError:
                        pass

        if 'DO NOT USE THIS CANDIDATE' in summary: continue
        if not summary or not date: continue

        if webc.search(summary):
            vulns[date]['web'] += 1
            explo[date]['web'] += exploit
     
        if   stackc.search(summary): inc_vmem(date, 'stack', exploit)
        elif heapc.search(summary):  inc_vmem(date, 'heap',  exploit)
        elif intc.search(summary):   inc_vmem(date, 'int',   exploit)
        elif pointc.search(summary): inc_vmem(date, 'point', exploit)
        elif fmtc.search(summary):   inc_vmem(date, 'fmt',   exploit)
        elif otherc.search(summary): inc_vmem(date, 'other', exploit)

        explo[date]['all'] += exploit
        vulns[date]['all'] += 1

def parse_csv(filename):
    datec = re.compile(',(\d{4}-\d{2})-')
    explc = re.compile('^(\d*)')

    stackc = re.compile('stack', re.IGNORECASE)
    heapc  = re.compile('heap|use[- ]after[- ]free|double free', re.IGNORECASE)

    f = open(filename)
    for line in f:
        try:
            date    = datec.search(line).group(1)
            exploit = explc.search(line).group(1)

            if exploit not in exploitdb_entries:

                if webc.search(line): explo[date]['web'] += 1

                if   stackc.search(line): inc_emem(date, 'stack')
                elif heapc.search(line):  inc_emem(date, 'heap')
                elif intc.search(line):   inc_emem(date, 'int')
                elif pointc.search(line): inc_emem(date, 'point')
                elif fmtc.search(line):   inc_emem(date, 'fmt')
                elif otherc.search(line): inc_emem(date, 'other')

                explo[date]['all'] += 1
        except AttributeError:
            pass

# download and process the latest CVE and ExploitDB entries
def download_entries():
    filescsv = os.path.join(intermediate_path, 'files.csv')
    explocsv = os.path.join(intermediate_path, 'explo.csv')

    for year in range(2002, datetime.date.today().year + 1):
        filename_remote = 'nvdcve-2.0-' + str(year) + '.xml'
        filename_local  = os.path.join(intermediate_path, filename_remote)
        url = 'http://static.nvd.nist.gov/feeds/xml/cve/' + filename_remote

        download(url, filename_local, True)

        logger.info("Parsing " + filename_remote)
        parse_xml(filename_local)

#   filename_remote = 'archive.tar.bz2'
    filename_remote = 'files.csv'
    filename_local  = os.path.join(intermediate_path, filename_remote)
#   url = 'http://www.exploit-db.com/' + filename_remote
    url = 'https://raw.githubusercontent.com/offensive-security/exploit-database/master/' + filename_remote

    download(url, filename_local, False)
    
#   system(['tar', '-jxvf', filename_local, '-C', intermediate_path, 'files.csv'])
#   system(['chmod', '644', filescsv])
    os.system('sort ' + filescsv + '| uniq > ' + explocsv)

    parse_csv(filescsv)


    
# generate a gnuplot script containing the base script in <script>
def makeplotscript( (name, script, min_x_year, max_y), type, step):
    max_x_year  = datetime.date.today().year
    max_x_month = datetime.date.today().month - 1
    if max_x_month == 0:
        max_x_year  = max_x_year - 1
        max_x_month = 12

    if not 'percentage' in name:
        max_y = max_y * step

    # key will be placed at (x,y):
    #   x = <min-x> + 5% of total number of months plotted
    #   y = <max-y> - 2.5%
    label_x_months = int(0.05 * ( ((max_x_year - min_x_year) * 12) + max_x_month ))
    label_x_month  =              int(label_x_months % 12)
    label_x_year   = min_x_year + int(label_x_months / 12)
    
    label_y = int(max_y - (0.025 * max_y))

    # generate a gnuplot script file in <output_plotscript> that, if plotted, will generate <output_filescript>
    output_filescript = os.path.join(output_path, name + '.' + str(step) + type)
    output_plotscript = os.path.join(intermediate_path, name + '.plot')
    h = open(header, 'r')
    s = open(script, 'r')
    t = open(output_plotscript, 'w')
  
    if type == '.pdf': t.write("set terminal pdfcairo font 'Verdana,6.5' linewidth 3\n")
    if type == '.js' : t.write("set terminal canvas   font 'Verdana,10.0' linewidth 2 size 1000,500 name '" + name + "'\n")
    if type == '.png': t.write("set terminal pngcairo font 'Verdana,10.0' linewidth 1 size 1000,500 transparent\n")
    # set terminal canvas  solid butt size 600,400 fsize 10 lw 1 fontscale 1 name "fillstyle_1" jsdir "."
#   if type == '.jpg': t.write("set terminal jpeg size 1280,800\n")
    t.write(h.read())
    t.write("set output '" + output_filescript + "'\n")
    t.write("set xrange ['%04d-01':'%04d-%02d']\n" % (min_x_year, max_x_year, max_x_month))
    t.write("set yrange [0:%d]\n" % (max_y))
    t.write("set key at '%04d-%02d',%d\n" % (label_x_year, label_x_month, label_y))
    t.write(s.read())
    
    t.close()
    h.close()
    s.close()
    
    return output_plotscript, output_filescript


def runscript(path):
    env = os.environ.copy()
    env['GNUPLOT_LIB'] = intermediate_path

    logger.info('plotting ' + path)
    out, err, ret = system(['gnuplot', path], env)
    if ret != 0: logger.warning('plot failed.\nstdout: ' + out + '\nstderr: ' + err)
   






# main

#            plot name            gnuplot script                                           start-x   max-y
plots = [ ( 'absolute0',          os.path.join(builder_path,'0-absolute.plot'),            1997,     100), 
          ( 'absolute1',          os.path.join(builder_path,'1-absolute.plot'),            1997,     100),
          ( 'absolute2',          os.path.join(builder_path,'2-absolute.plot'),            1997,     600),
          ( 'absolute_and_web',   os.path.join(builder_path,'3-absolute+web.plot'),        1997,     600),
          ( 'percentage',         os.path.join(builder_path,'4a-percentage.plot'),         1997,      50),
          ( 'percentage_and_web', os.path.join(builder_path,'4b-percentage+web.plot'),     1997,      50),
          ( 'categories_vulns',   os.path.join(builder_path,'5-categories-vulns.plot'),    2000,     100),
          ( 'categories_exploits',os.path.join(builder_path,'6-categories-exploits.plot'), 2000,      50), ]



# log format
formatter = logging.Formatter("%(asctime)-6s: %(name)s - %(levelname)s - %(message)s")

# file logger
fileLogger = logging.FileHandler(filename = logfile)
fileLogger.setLevel(logging.DEBUG)
fileLogger.setFormatter(formatter)

# console logger
consoleLogger = logging.StreamHandler()
consoleLogger.setLevel(logging.DEBUG)
consoleLogger.setFormatter(formatter)

# root logger that handles every message.
logger = logging.getLogger("plotscripter")

# set level and add the file logger handler.
logger.setLevel(logging.DEBUG)
logger.addHandler(fileLogger)
logger.addHandler(consoleLogger)


print 'logfile: ' + logfile
logger.info("Update process started")



download_entries()

for step in steps:
    dump(f_vulns + '.' + str(step), vulns, step)
    dump(f_explo + '.' + str(step), explo, step)

for step in steps:
    system(['cp', f_vulns + '.' + str(step), f_vulns])
    system(['cp', f_explo + '.' + str(step), f_explo])
    for type in ['.pdf', '.png', '.js']:
        for plot in plots:
            plotscript, javascript = makeplotscript(plot, type, step)
            runscript(plotscript)


