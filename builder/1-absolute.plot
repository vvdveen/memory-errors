# TALK-1: MEMORY ERROR VULNERABILITIES AND MEMORY ERROR EXPLOITS
set title "Memory errors"

set xlabel 'Date'
set ylabel "#Vulnerabilities / #Exploits"

plot 'vulns.dat'    using 1:8 smooth bezier title 'Vulnerabilities' with lines linestyle 1, \
     'exploits.dat' using 1:8 smooth bezier title 'Exploits'        with lines linestyle 2 

