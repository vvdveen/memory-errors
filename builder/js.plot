set terminal canvas dashed name 'various' 

# Line style for axes
set style line 80 linecolor rgb '#808080' linetype 1 linewidth 1

# Line style for grid
set style line 81 linecolor rgb '#808080' linetype 0 linewidth 1

# Define axes
set border 3 back linestyle 80
set tics nomirror

# Define grid
set grid back linestyle 81

# color definitions
set style line 1 linecolor rgb '#8b1a0e' linetype 1 linewidth 5 # --- red
set style line 2 linecolor rgb '#5060D0' linetype 1 linewidth 5 # --- blue
set style line 3 linecolor rgb '#5e9c36' linetype 1 linewidth 5 # --- green
set style line 4 linecolor rgb '#E2B522' linetype 1 linewidth 5

# GENERAL SETTINGS
set xdata time 
set timefmt "%Y-%m"

# TALK-0: MEMORY ERROR VULNERABILITIES
set output "TALK-0.js"
set title "Memory errors"

set  xlabel 'Date'
set  ylabel "#Vulnerabilities"

set xrange ["1997-06":"2012-06"]
set yrange [0:240]

set xtics ("1997" "1997-06", "" "1998-06", "" "1999-06", "2000" "2000-06","" "2001-06", "" "2002-06", "2003" "2003-06", "" "2004-06", "" "2005-06", "2006" "2006-06", "" "2007-06", "" "2008-06", "2009" "2009-06", "" "2010-06", "" "2011-06", "2012" "2012-06")
set ytics 0,60

set key top left reverse
set key at "1997-06",230 

plot 'vulns.dat'    using 1:8 smooth bezier title 'Vulnerabilities' with lines linestyle 1

# TALK-1: MEMORY ERROR VULNERABILITIES AND MEMORY ERROR EXPLOITS
set output "TALK-1.js"
set title "Memory errors"

set  xlabel 'Date'
set  ylabel "#Vulnerabilities / #Exploits"

set xrange ["1997-06":"2012-06"]
set yrange [0:240]

set xtics ("1997" "1997-06", "" "1998-06", "" "1999-06", "2000" "2000-06","" "2001-06", "" "2002-06", "2003" "2003-06", "" "2004-06", "" "2005-06", "2006" "2006-06", "" "2007-06", "" "2008-06", "2009" "2009-06", "" "2010-06", "" "2011-06", "2012" "2012-06")
set ytics 0,60

set key top left
set key at "1997-06",230 

plot 'vulns.dat'    using 1:8 smooth bezier title 'Vulnerabilities' with lines linestyle 1, \
     'exploits.dat' using 1:8 smooth bezier title 'Exploits'        with lines linestyle 2 


# TALK-2: TOTAL VULNERABILITIES AND MEMORY ERROR VULNERABILITIES
set output 'TALK-2.js'
set title 'Memory errors compared to total number of vulnerabilities'

set xlabel 'Date'
set ylabel '#Vulnerabilities'

set xrange ["1997-06":"2012-06"]
set yrange [0:1600]

set xtics ("1997" "1997-06", "" "1998-06", "" "1999-06", "2000" "2000-06","" "2001-06", "" "2002-06", "2003" "2003-06", "" "2004-06", "" "2005-06", "2006" "2006-06", "" "2007-06", "" "2008-06", "2009" "2009-06", "" "2010-06", "" "2011-06", "2012" "2012-06")
set ytics 0,400

set key top left
set key at "1997-06", 1575 

plot "vulns.dat" using 1:8 smooth bezier title 'Memory errors' with lines linestyle 1, \
     "vulns.dat" using 1:9 smooth bezier title 'Total'         with lines linestyle 3

# TALK-3: TOTAL VULNERABILITIES, WEB VULNERABILITIES AND MEMORY ERROR VULNERABILITIES
set output 'TALK-3.js'
set title 'Memory errors compared to total number of vulnerabilities + web'

set xlabel 'Date'
set ylabel '#Vulnerabilities'

set xrange ["1997-06":"2012-06"]
set yrange [0:1600]

set xtics ("1997" "1997-06", "" "1998-06", "" "1999-06", "2000" "2000-06","" "2001-06", "" "2002-06", "2003" "2003-06", "" "2004-06", "" "2005-06", "2006" "2006-06", "" "2007-06", "" "2008-06", "2009" "2009-06", "" "2010-06", "" "2011-06", "2012" "2012-06")
set ytics 0,400

set key top left
set key at "1997-06", 1575 

plot "vulns.dat" using 1:8  smooth bezier title 'Memory errors' with lines linestyle 1, \
     "vulns.dat" using 1:9  smooth bezier title 'Total'         with lines linestyle 3, \
     "vulns.dat" using 1:10 smooth bezier title 'Web'           with lines linestyle 4

# TALK-4a: MEMORY ERRORS AS PERCENTAGE OF TOTAL VULNERABILITIES / EXPLOITS
set output "TALK-4a.js"
set title "Memory errors as a percentage of total reported"

  set xlabel 'Date'
unset ylabel

set xrange ["1997-06":"2012-06"]
set yrange [0:50]

set  xtics ("1997" "1997-06", "" "1998-06", "" "1999-06", "2000" "2000-06","" "2001-06", "" "2002-06", "2003" "2003-06", "" "2004-06", "" "2005-06", "2006" "2006-06", "" "2007-06", "" "2008-06", "2009" "2009-06", "" "2010-06", "" "2011-06", "2012" "2012-06")
set  ytics 0,10
set mytics 3

set key top left
set key at "1997-06","49%"

set format y "%g%%"

plot "vulns.dat"    using 1:($8/$9*100) smooth bezier title "Vulnerabilities" with lines linestyle 1, \
     "exploits.dat" using 1:($8/$9*100) smooth bezier title "Exploits"        with lines linestyle 2

# TALK-4b: MEMORY ERRORS AS PERCENTAGE OF TOTAL VULNERABILITIES / EXPLOITS
set output "TALK-4b.js"
set title "Memory errors as a percentage of total reported"

  set xlabel 'Date'
unset ylabel

set xrange ["1997-06":"2012-06"]
set yrange [0:50]

set  xtics ("1997" "1997-06", "" "1998-06", "" "1999-06", "2000" "2000-06","" "2001-06", "" "2002-06", "2003" "2003-06", "" "2004-06", "" "2005-06", "2006" "2006-06", "" "2007-06", "" "2008-06", "2009" "2009-06", "" "2010-06", "" "2011-06", "2012" "2012-06")
set  ytics 0,10
set mytics 3

set key top left
set key at "1997-06","49%"

set format y "%g%%"

plot "vulns.dat"    using 1:($8 /$9*100) smooth bezier title "Vulnerabilities"     with lines linestyle 1, \
     "exploits.dat" using 1:($8 /$9*100) smooth bezier title "Exploits"            with lines linestyle 2, \
     "vulns.dat"    using 1:($10/$9*100) smooth bezier title "Web vulnerabilities" with lines linestyle 3, \
     "exploits.dat" using 1:($10/$9*100) smooth bezier title "Web exploits"        with lines linestyle 4


# TALK-5: CATEGORIZATION OF VULNERABILITIES
set output 'TALK-5.js'
set title 'Memory error vulnerabilities categorized'

set xlabel 'Date'
set ylabel '#Vulnerabilities'

set xrange["2000-06":"2012-06"]
set yrange[0:200]

set xtics ("2000" "2000-06", "" "2001-06", "2002" "2002-06", "" "2003-06", "2004" "2004-06", "" "2005-06", "2006" "2006-06", "" "2007-06", "2008" "2008-06", "" "2009-06", "2010" "2010-06", "" "2011-06", "2012" "2012-06")
set xtics out
set ytics 0,40
unset mytics

set key top left invert reverse
#set key top left invert reverse opaque
set key at "2000-08",195

unset format

set style fill transparent solid 0.8 noborder

plot "vulns.dat" using 1:              2                      title "Stack"   with filledcurve x1 linecolor rgb "#FFCC33", \
     "vulns.dat" using 1:              2 :(            $2+$3) title "Heap"    with filledcurve    linecolor rgb "#5060D0", \
     "vulns.dat" using 1:(         $2+$3):(         $2+$3+$4) title "Integer" with filledcurve    linecolor rgb "#993333", \
     "vulns.dat" using 1:(      $2+$3+$4):(      $2+$3+$4+$5) title "Pointer" with filledcurve    linecolor rgb "#669933", \
     "vulns.dat" using 1:(   $2+$3+$4+$5):(   $2+$3+$4+$5+$6) title "Format"  with filledcurve    linecolor rgb "#303030", \
     "vulns.dat" using 1:                 ($2+$3+$4+$5+$6+$7) title "Other"   with lines          linecolor rgb "#C0C0C0" lw 0.5

# TALK-6: CATEGORIZATION OF EXPLOITS
set output 'TALK-6.js'
set title 'Memory error exploits categorized'

set xlabel 'Date'
set ylabel '#Exploits'

set xrange["2000-06":"2012-06"]
set yrange[0:80]

set xtics ("2000" "2000-06", "" "2001-06", "2002" "2002-06", "" "2003-06", "2004" "2004-06", "" "2005-06", "2006" "2006-06", "" "2007-06", "2008" "2008-06", "" "2009-06", "2010" "2010-06", "" "2011-06", "2012" "2012-06")
set xtics out
set ytics 0,16 
unset mytics

set key top left invert reverse
#set key top left invert reverse opaque 
set key at "2000-08",78

plot "exploits.dat" using 1:              2                      title "Stack"   with filledcurve x1 linecolor rgb "#FFCC33", \
     "exploits.dat" using 1:              2 :(            $2+$3) title "Heap"    with filledcurve    linecolor rgb "#5060D0", \
     "exploits.dat" using 1:(         $2+$3):(         $2+$3+$4) title "Integer" with filledcurve    linecolor rgb "#993333", \
     "exploits.dat" using 1:(      $2+$3+$4):(      $2+$3+$4+$5) title "Pointer" with filledcurve    linecolor rgb "#669933", \
     "exploits.dat" using 1:(   $2+$3+$4+$5):(   $2+$3+$4+$5+$6) title "Format"  with filledcurve    linecolor rgb "#303030", \
     "exploits.dat" using 1:                 ($2+$3+$4+$5+$6+$7) title "Other"   with lines          linecolor rgb "#C0C0C0" lw 0.5

#set key noopaque
unset xdata
unset timefmt

# TALK-7: EXPLOIT KITS
set output "TALK-7.js"
set title "Exploit kit breakdown"

unset xlabel
  set ylabel '#Exploits'

set xrange[-0.6:7.6]
set yrange[0:35]

unset xtics
  set xtics rotate by -45 out nomirror
  set ytics 0,7

set key top right 
set key at 7.5,35

set style data histogram
set style histogram rowstacked
set style fill transparent solid 0.8 noborder
set boxwidth 0.8 relative

plot 'exploitkits.dat' using 3:xticlabels(1) title 'Memory errors' linecolor rgb '#FFCC33', \
                    '' using 4               title 'Unspecified'   linecolor rgb '#5060D0', \
                    '' using 5               title 'Other'         linecolor rgb '#669933'

# TALK-8: LANGUAGE POPULARITY
set output "TALK-8.js"
set title ''

unset xlabel
set ylabel 'Tiobe programming language rating' offset -1.0,-3.0
 
set xrange[.5:10.5]
set yrange[0:20]

unset xtics
  set xtics rotate out nomirror 
  set ytics rotate out 0,5 offset 1.0

unset key

set boxwidth 0.6 relative 

set format y '%g%%'

set style line 1 linecolor rgb '#8B1A0E' linetype 1 linewidth 5 # --- red
set style line 2 linecolor rgb '#5060D0' linetype 1 linewidth 5 # --- blue
set style line 3 linecolor rgb '#8B1A0E' linetype 1 linewidth 5 # --- red
set style line 4 linecolor rgb '#8B1A0E' linetype 1 linewidth 5 # --- red
set style line 5 linecolor rgb '#5060D0' linetype 1 linewidth 5 # --- blue
set style line 6 linecolor rgb '#5060D0' linetype 1 linewidth 5 # --- blue
set style line 7 linecolor rgb '#5060D0' linetype 1 linewidth 5 # --- blue
set style line 8 linecolor rgb '#5060D0' linetype 1 linewidth 5 # --- blue
set style line 9 linecolor rgb '#5060D0' linetype 1 linewidth 5 # --- blue
set style line 10 linecolor rgb '#5060D0' linetype 1 linewidth 5 # --- blue

#plot 'tiobe.dat' using 2:xticlabels(1) title '' linecolor rgb '#5060D0'
 plot 'tiobe.dat' using ($0):2:($0):xticlabels(1) w boxes lc variable notitle

set terminal wxt 0
replot



unset mytics
unset format

