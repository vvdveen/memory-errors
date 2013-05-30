function absolute0() {
canvas = document.getElementById("absolute0");
ctx = canvas.getContext("2d");
// Reinitialize mouse tracking and zoom for this particular plot
if ((typeof(gnuplot.active_plot) == "undefined" || gnuplot.active_plot != absolute0)  &&  typeof(gnuplot.mouse_update) != "undefined") {
  gnuplot.active_plot_name = "absolute0";
  gnuplot.active_plot = absolute0;
  canvas.onmousemove = gnuplot.mouse_update;
  canvas.onmouseup = gnuplot.zoom_in;
  canvas.onmousedown = gnuplot.saveclick;
  canvas.onkeypress = gnuplot.do_hotkey;
  if (canvas.attachEvent) {canvas.attachEvent('mouseover', absolute0);}
  else if (canvas.addEventListener) {canvas.addEventListener('mouseover', absolute0, false);} 
  gnuplot.zoomed = false;
  gnuplot.zoom_axis_width = 0;
  gnuplot.zoom_in_progress = false;
  gnuplot.polar_mode = false;
  ctx.clearRect(0,0,1000,500);
}
// Gnuplot version 4.6.0
// short forms of commands provided by gnuplot_common.js
function DT  (dt)  {gnuplot.dashtype(dt);};
function DS  (x,y) {gnuplot.dashstart(x,y);};
function DL  (x,y) {gnuplot.dashstep(x,y);};
function M   (x,y) {if (gnuplot.pattern.length > 0) DS(x,y); else gnuplot.M(x,y);};
function L   (x,y) {if (gnuplot.pattern.length > 0) DL(x,y); else gnuplot.L(x,y);};
function Dot (x,y) {gnuplot.Dot(x,y);};
function Pt  (N,x,y,w) {gnuplot.Pt(N,x,y,w);};
function R   (x,y,w,h) {gnuplot.R(x,y,w,h);};
function T   (x,y,fontsize,justify,string) {gnuplot.T(x,y,fontsize,justify,string);};
function TR  (x,y,angle,fontsize,justify,string) {gnuplot.TR(x,y,angle,fontsize,justify,string);};
function bp  (x,y) {gnuplot.bp(x,y);};
function cfp () {gnuplot.cfp();};
function cfsp() {gnuplot.cfsp();};

ctx.lineCap = "butt"; ctx.lineJoin = "miter";
CanvasTextFunctions.enable(ctx);
ctx.strokeStyle = "rgb(215,215,215)";
ctx.lineWidth = 2;

ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(620,4680);
L(9759,4680);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(620,4680);
L(720,4680);
ctx.stroke();
ctx.closePath();
T(540,4730,10.0,"Right"," 0");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(620,3950);
L(9759,3950);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(620,3950);
L(720,3950);
ctx.stroke();
ctx.closePath();
T(540,4000,10.0,"Right"," 50");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(620,3220);
L(9759,3220);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(620,3220);
L(720,3220);
ctx.stroke();
ctx.closePath();
T(540,3270,10.0,"Right"," 100");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(620,2491);
L(9759,2491);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(620,2491);
L(720,2491);
ctx.stroke();
ctx.closePath();
T(540,2541,10.0,"Right"," 150");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(620,1761);
L(9759,1761);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(620,1761);
L(720,1761);
ctx.stroke();
ctx.closePath();
T(540,1811,10.0,"Right"," 200");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(620,1031);
L(9759,1031);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(620,1031);
L(720,1031);
ctx.stroke();
ctx.closePath();
T(540,1081,10.0,"Right"," 250");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(620,301);
L(9759,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(620,301);
L(720,301);
ctx.stroke();
ctx.closePath();
T(540,351,10.0,"Right"," 300");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(620,4680);
L(620,4630);
M(759,4680);
L(759,4630);
M(900,4680);
L(900,4630);
M(1041,4680);
L(1041,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(1183,4680);
L(1183,543);
M(1183,418);
L(1183,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(1183,4680);
L(1183,4580);
ctx.stroke();
ctx.closePath();
T(1183,4830,10.0,"Center","1998");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(1322,4680);
L(1322,4630);
M(1461,4680);
L(1461,4630);
M(1603,4680);
L(1603,4630);
M(1745,4680);
L(1745,4630);
M(1883,4680);
L(1883,4630);
M(2024,4680);
L(2024,4630);
M(2166,4680);
L(2166,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(2306,4680);
L(2306,543);
M(2306,418);
L(2306,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(2306,4680);
L(2306,4580);
ctx.stroke();
ctx.closePath();
T(2306,4830,10.0,"Center","2000");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(2447,4680);
L(2447,4630);
M(2588,4680);
L(2588,4630);
M(2730,4680);
L(2730,4630);
M(2870,4680);
L(2870,4630);
M(3010,4680);
L(3010,4630);
M(3150,4680);
L(3150,4630);
M(3291,4680);
L(3291,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(3433,4680);
L(3433,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(3433,4680);
L(3433,4580);
ctx.stroke();
ctx.closePath();
T(3433,4830,10.0,"Center","2002");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(3572,4680);
L(3572,4630);
M(3711,4680);
L(3711,4630);
M(3853,4680);
L(3853,4630);
M(3996,4680);
L(3996,4630);
M(4133,4680);
L(4133,4630);
M(4274,4680);
L(4274,4630);
M(4416,4680);
L(4416,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(4557,4680);
L(4557,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(4557,4680);
L(4557,4580);
ctx.stroke();
ctx.closePath();
T(4557,4830,10.0,"Center","2004");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(4697,4680);
L(4697,4630);
M(4838,4680);
L(4838,4630);
M(4980,4680);
L(4980,4630);
M(5121,4680);
L(5121,4630);
M(5260,4680);
L(5260,4630);
M(5400,4680);
L(5400,4630);
M(5541,4680);
L(5541,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(5683,4680);
L(5683,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(5683,4680);
L(5683,4580);
ctx.stroke();
ctx.closePath();
T(5683,4830,10.0,"Center","2006");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(5822,4680);
L(5822,4630);
M(5961,4680);
L(5961,4630);
M(6103,4680);
L(6103,4630);
M(6246,4680);
L(6246,4630);
M(6383,4680);
L(6383,4630);
M(6524,4680);
L(6524,4630);
M(6666,4680);
L(6666,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(6807,4680);
L(6807,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(6807,4680);
L(6807,4580);
ctx.stroke();
ctx.closePath();
T(6807,4830,10.0,"Center","2008");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(6947,4680);
L(6947,4630);
M(7088,4680);
L(7088,4630);
M(7230,4680);
L(7230,4630);
M(7371,4680);
L(7371,4630);
M(7510,4680);
L(7510,4630);
M(7650,4680);
L(7650,4630);
M(7791,4680);
L(7791,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(7933,4680);
L(7933,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(7933,4680);
L(7933,4580);
ctx.stroke();
ctx.closePath();
T(7933,4830,10.0,"Center","2010");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(8072,4680);
L(8072,4630);
M(8211,4680);
L(8211,4630);
M(8354,4680);
L(8354,4630);
M(8496,4680);
L(8496,4630);
M(8633,4680);
L(8633,4630);
M(8774,4680);
L(8774,4630);
M(8916,4680);
L(8916,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(9057,4680);
L(9057,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(9057,4680);
L(9057,4580);
ctx.stroke();
ctx.closePath();
T(9057,4830,10.0,"Center","2012");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(9197,4680);
L(9197,4630);
M(9338,4680);
L(9338,4630);
M(9480,4680);
L(9480,4630);
M(9621,4680);
L(9621,4630);
M(9760,4680);
L(9760,4630);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(620,301);
L(620,4680);
L(9759,4680);
M(9759,301);
M(620,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(000,000,000)";
TR(90,2541,270,10.0,"Center","#Vulnerabilities");
T(5189,4980,10.0,"Center","Date");
T(5189,201,10.0,"Center","Memory errors");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (typeof(gnuplot.hide_absolute0_plot_1) == "undefined"|| !gnuplot.hide_absolute0_plot_1) {
ctx.lineWidth = 10;
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(139,026,014)";
ctx.strokeStyle = "rgb(000,000,000)";
T(2774,530,10.0,"Right","Vulnerabilities");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(139,026,014)";
ctx.beginPath();
M(1074,480);
L(1494,480);
M(620,4540);
L(671,4532);
L(814,4505);
L(958,4475);
L(1101,4441);
L(1245,4403);
L(1388,4360);
L(1531,4311);
L(1675,4256);
L(1818,4195);
L(1962,4128);
L(2105,4057);
L(2249,3982);
L(2392,3904);
L(2536,3825);
L(2679,3745);
L(2823,3665);
L(2966,3586);
L(3110,3508);
L(3253,3431);
L(3397,3356);
L(3540,3283);
L(3684,3212);
L(3827,3142);
L(3970,3071);
L(4114,2998);
L(4257,2920);
L(4401,2835);
L(4544,2741);
L(4688,2636);
L(4831,2521);
L(4975,2398);
L(5118,2268);
L(5262,2135);
L(5405,2002);
L(5549,1871);
L(5692,1746);
L(5836,1629);
L(5979,1523);
L(6123,1432);
L(6266,1361);
L(6409,1316);
L(6553,1300);
L(6696,1313);
L(6840,1354);
L(6984,1416);
L(7127,1490);
L(7271,1567);
L(7414,1639);
L(7557,1699);
L(7701,1747);
L(7844,1786);
L(7988,1818);
L(8131,1848);
L(8275,1883);
L(8418,1925);
L(8561,1979);
L(8705,2042);
L(8848,2102);
L(8992,2136);
L(9136,2115);
L(9279,2036);
L(9423,1963);
L(9566,2048);
L(9709,2534);
L(9759,3029);
ctx.stroke();
ctx.closePath();
} // End absolute0_plot_1 
ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";

// plot boundaries and axis scaling information for mousing 
gnuplot.plot_term_xmax = 1000;
gnuplot.plot_term_ymax = 500;
gnuplot.plot_xmin = 62.0;
gnuplot.plot_xmax = 975.9;
gnuplot.plot_ybot = 468.0;
gnuplot.plot_ytop = 30.1;
gnuplot.plot_width = 913.9;
gnuplot.plot_height = 437.9;
gnuplot.plot_axis_xmin = -9.4608e+07;
gnuplot.plot_axis_xmax = 4.1809e+08;
gnuplot.plot_axis_ymin = 0;
gnuplot.plot_axis_ymax = 300;
gnuplot.plot_axis_x2min = "none"
gnuplot.plot_axis_y2min = "none"
gnuplot.plot_logaxis_x = 0;
gnuplot.plot_logaxis_y = 0;
gnuplot.plot_axis_width = gnuplot.plot_axis_xmax - gnuplot.plot_axis_xmin;
gnuplot.plot_axis_height = gnuplot.plot_axis_ymax - gnuplot.plot_axis_ymin;
gnuplot.plot_timeaxis_x = "DateTime";
}