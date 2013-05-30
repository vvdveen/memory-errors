# TALK-3: TOTAL VULNERABILITIES, WEB VULNERABILITIES AND MEMORY ERROR VULNERABILITIES
set title 'Memory errors compared to total number of vulnerabilities + web'

set xlabel 'Date'
set ylabel '#Vulnerabilities'

plot "vulns.dat" using 1:8  smooth bezier title 'Memory errors' with lines linestyle 1, \
     "vulns.dat" using 1:9  smooth bezier title 'Total'         with lines linestyle 3, \
     "vulns.dat" using 1:10 smooth bezier title 'Web'           with lines linestyle 4

