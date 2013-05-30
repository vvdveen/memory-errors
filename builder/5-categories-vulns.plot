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

