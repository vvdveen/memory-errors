set terminal canvas   font 'Verdana,10.0' linewidth 2 size 1000,500 name 'percentage_and_web'
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

set xtics format "%Y"

set key top left reverse
set output './output/percentage_and_web.3.js'
set xrange ['1997-01':'2013-04']
set yrange [0:50]
set key at '1997-09',48
# TALK-4b: MEMORY ERRORS AS PERCENTAGE OF TOTAL VULNERABILITIES / EXPLOITS
set title "Memory errors as a percentage of total reported"

set xlabel 'Date'

set format y "%g%%"

plot "vulns.dat"    using 1:($8 /$9*100) smooth bezier title "Vulnerabilities"     with lines linestyle 1, \
     "exploits.dat" using 1:($8 /$9*100) smooth bezier title "Exploits"            with lines linestyle 2, \
     "vulns.dat"    using 1:($10/$9*100) smooth bezier title "Web vulnerabilities" with lines linestyle 3, \
     "exploits.dat" using 1:($10/$9*100) smooth bezier title "Web exploits"        with lines linestyle 4
