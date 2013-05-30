set terminal canvas   font 'Verdana,10.0' linewidth 2 size 1000,500 name 'categories_vulns'
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
set output './output/categories_vulns.3.js'
set xrange ['2000-01':'2013-04']
set yrange [0:300]
set key at '2000-08',292
# TALK-5: CATEGORIZATION OF VULNERABILITIES
set title 'Memory error vulnerabilities categorized'

set xlabel 'Date'
set ylabel '#Vulnerabilities'

set xtics out

set key top left invert reverse

set style fill transparent solid 0.8 noborder

plot "vulns.dat" using 1:              2                      title "Stack"   with filledcurve x1 linecolor rgb "#FFCC33", \
     "vulns.dat" using 1:              2 :(            $2+$3) title "Heap"    with filledcurve    linecolor rgb "#5060D0", \
     "vulns.dat" using 1:(         $2+$3):(         $2+$3+$4) title "Integer" with filledcurve    linecolor rgb "#993333", \
     "vulns.dat" using 1:(      $2+$3+$4):(      $2+$3+$4+$5) title "Pointer" with filledcurve    linecolor rgb "#669933", \
     "vulns.dat" using 1:(   $2+$3+$4+$5):(   $2+$3+$4+$5+$6) title "Format"  with filledcurve    linecolor rgb "#303030", \
     "vulns.dat" using 1:                 ($2+$3+$4+$5+$6+$7) title "Other"   with lines          linecolor rgb "#C0C0C0" lw 0.5

