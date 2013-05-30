# MEMORY ERROR VULNERABILITIES
set title "Memory errors"

set xlabel 'Date'
set ylabel "#Vulnerabilities"

plot 'vulns.dat'    using 1:8 smooth bezier title 'Vulnerabilities' with lines linestyle 1

