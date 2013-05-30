# TALK-4b: MEMORY ERRORS AS PERCENTAGE OF TOTAL VULNERABILITIES / EXPLOITS
set title "Memory errors as a percentage of total reported"

set xlabel 'Date'

set format y "%g%%"

plot "vulns.dat"    using 1:($8 /$9*100) smooth bezier title "Vulnerabilities"     with lines linestyle 1, \
     "exploits.dat" using 1:($8 /$9*100) smooth bezier title "Exploits"            with lines linestyle 2, \
     "vulns.dat"    using 1:($10/$9*100) smooth bezier title "Web vulnerabilities" with lines linestyle 3, \
     "exploits.dat" using 1:($10/$9*100) smooth bezier title "Web exploits"        with lines linestyle 4
