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
// Gnuplot version 4.6.6
// short forms of commands provided by gnuplot_common.js
function DT  (dt)  {gnuplot.dashtype(dt);};
function DS  (x,y) {gnuplot.dashstart(x,y);};
function DL  (x,y) {gnuplot.dashstep(x,y);};
function M   (x,y) {if (gnuplot.pattern.length > 0) DS(x,y); else gnuplot.M(x,y);};
function L   (x,y) {if (gnuplot.pattern.length > 0) DL(x,y); else gnuplot.L(x,y);};
function Dot (x,y) {gnuplot.Dot(x/10.,y/10.);};
function Pt  (N,x,y,w) {gnuplot.Pt(N,x/10.,y/10.,w/10.);};
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
M(620,3804);
L(9759,3804);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(620,3804);
L(720,3804);
ctx.stroke();
ctx.closePath();
T(540,3854,10.0,"Right"," 20");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(620,2928);
L(9759,2928);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(620,2928);
L(720,2928);
ctx.stroke();
ctx.closePath();
T(540,2978,10.0,"Right"," 40");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(620,2053);
L(9759,2053);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(620,2053);
L(720,2053);
ctx.stroke();
ctx.closePath();
T(540,2103,10.0,"Right"," 60");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(620,1177);
L(9759,1177);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(620,1177);
L(720,1177);
ctx.stroke();
ctx.closePath();
T(540,1227,10.0,"Right"," 80");
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
T(540,351,10.0,"Right"," 100");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(620,4680);
L(620,4630);
M(733,4680);
L(733,4630);
M(848,4680);
L(848,4630);
M(962,4680);
L(962,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(1077,4680);
L(1077,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(1077,4680);
L(1077,4580);
ctx.stroke();
ctx.closePath();
T(1077,4830,10.0,"Center","1998");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(1190,4680);
L(1190,4630);
M(1303,4680);
L(1303,4630);
M(1419,4680);
L(1419,4630);
M(1534,4680);
L(1534,4630);
M(1646,4680);
L(1646,4630);
M(1760,4680);
L(1760,4630);
M(1876,4680);
L(1876,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(1990,4680);
L(1990,557);
M(1990,432);
L(1990,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(1990,4680);
L(1990,4580);
ctx.stroke();
ctx.closePath();
T(1990,4830,10.0,"Center","2000");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(2104,4680);
L(2104,4630);
M(2218,4680);
L(2218,4630);
M(2334,4680);
L(2334,4630);
M(2448,4680);
L(2448,4630);
M(2561,4680);
L(2561,4630);
M(2675,4680);
L(2675,4630);
M(2790,4680);
L(2790,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(2905,4680);
L(2905,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(2905,4680);
L(2905,4580);
ctx.stroke();
ctx.closePath();
T(2905,4830,10.0,"Center","2002");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(3018,4680);
L(3018,4630);
M(3131,4680);
L(3131,4630);
M(3246,4680);
L(3246,4630);
M(3362,4680);
L(3362,4630);
M(3474,4680);
L(3474,4630);
M(3588,4680);
L(3588,4630);
M(3703,4680);
L(3703,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(3818,4680);
L(3818,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(3818,4680);
L(3818,4580);
ctx.stroke();
ctx.closePath();
T(3818,4830,10.0,"Center","2004");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(3932,4680);
L(3932,4630);
M(4046,4680);
L(4046,4630);
M(4162,4680);
L(4162,4630);
M(4276,4680);
L(4276,4630);
M(4389,4680);
L(4389,4630);
M(4503,4680);
L(4503,4630);
M(4617,4680);
L(4617,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(4733,4680);
L(4733,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(4733,4680);
L(4733,4580);
ctx.stroke();
ctx.closePath();
T(4733,4830,10.0,"Center","2006");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(4846,4680);
L(4846,4630);
M(4959,4680);
L(4959,4630);
M(5074,4680);
L(5074,4630);
M(5190,4680);
L(5190,4630);
M(5302,4680);
L(5302,4630);
M(5416,4680);
L(5416,4630);
M(5531,4680);
L(5531,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(5646,4680);
L(5646,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(5646,4680);
L(5646,4580);
ctx.stroke();
ctx.closePath();
T(5646,4830,10.0,"Center","2008");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(5760,4680);
L(5760,4630);
M(5874,4680);
L(5874,4630);
M(5989,4680);
L(5989,4630);
M(6104,4680);
L(6104,4630);
M(6217,4680);
L(6217,4630);
M(6331,4680);
L(6331,4630);
M(6445,4680);
L(6445,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(6561,4680);
L(6561,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(6561,4680);
L(6561,4580);
ctx.stroke();
ctx.closePath();
T(6561,4830,10.0,"Center","2010");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(6674,4680);
L(6674,4630);
M(6787,4680);
L(6787,4630);
M(6902,4680);
L(6902,4630);
M(7018,4680);
L(7018,4630);
M(7129,4680);
L(7129,4630);
M(7244,4680);
L(7244,4630);
M(7359,4680);
L(7359,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(7473,4680);
L(7473,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(7473,4680);
L(7473,4580);
ctx.stroke();
ctx.closePath();
T(7473,4830,10.0,"Center","2012");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(7588,4680);
L(7588,4630);
M(7702,4680);
L(7702,4630);
M(7817,4680);
L(7817,4630);
M(7932,4680);
L(7932,4630);
M(8044,4680);
L(8044,4630);
M(8159,4680);
L(8159,4630);
M(8273,4680);
L(8273,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(8388,4680);
L(8388,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(8388,4680);
L(8388,4580);
ctx.stroke();
ctx.closePath();
T(8388,4830,10.0,"Center","2014");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(8501,4680);
L(8501,4630);
M(8614,4680);
L(8614,4630);
M(8730,4680);
L(8730,4630);
M(8845,4680);
L(8845,4630);
M(8957,4680);
L(8957,4630);
M(9071,4680);
L(9071,4630);
M(9187,4680);
L(9187,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(9301,4680);
L(9301,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(9301,4680);
L(9301,4580);
ctx.stroke();
ctx.closePath();
T(9301,4830,10.0,"Center","2016");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(9415,4680);
L(9415,4630);
M(9530,4680);
L(9530,4630);
M(9645,4680);
L(9645,4630);
M(9759,4680);
L(9759,4630);
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
T(2857,544,10.0,"Right","Vulnerabilities");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(139,026,014)";
ctx.beginPath();
M(1157,494);
L(1577,494);
M(620,4535);
L(656,4526);
L(790,4498);
L(923,4475);
L(1057,4453);
L(1191,4426);
L(1325,4384);
L(1459,4322);
L(1592,4240);
L(1726,4142);
L(1860,4037);
L(1994,3931);
L(2128,3828);
L(2262,3732);
L(2396,3642);
L(2530,3557);
L(2664,3473);
L(2797,3384);
L(2931,3285);
L(3065,3185);
L(3199,3098);
L(3332,3038);
L(3466,3004);
L(3600,2974);
L(3734,2913);
L(3868,2796);
L(4002,2619);
L(4136,2404);
L(4270,2191);
L(4404,2011);
L(4537,1870);
L(4671,1748);
L(4805,1617);
L(4939,1462);
L(5073,1295);
L(5206,1154);
L(5340,1081);
L(5474,1103);
L(5608,1214);
L(5742,1375);
L(5876,1537);
L(6010,1662);
L(6144,1739);
L(6278,1781);
L(6411,1806);
L(6545,1827);
L(6679,1845);
L(6813,1866);
L(6947,1904);
L(7080,1972);
L(7214,2059);
L(7348,2122);
L(7482,2114);
L(7616,2039);
L(7750,1962);
L(7884,1956);
L(8018,2030);
L(8152,2128);
L(8285,2203);
L(8419,2251);
L(8553,2274);
L(8687,2240);
L(8820,2138);
L(8954,2004);
L(9088,1807);
L(9222,1516);
L(9356,1191);
L(9490,1048);
L(9624,1397);
L(9654,301);
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
gnuplot.plot_axis_ymin = 0;
gnuplot.plot_axis_ymax = 100;
gnuplot.plot_axis_x2min = "none"
gnuplot.plot_axis_y2min = "none"
gnuplot.plot_logaxis_x = 0;
gnuplot.plot_logaxis_y = 0;
gnuplot.plot_axis_width = gnuplot.plot_axis_xmax - gnuplot.plot_axis_xmin;
gnuplot.plot_axis_height = gnuplot.plot_axis_ymax - gnuplot.plot_axis_ymin;
gnuplot.plot_axis_xmin = -94608000.000;
gnuplot.plot_axis_xmax = 536544000.000;
gnuplot.plot_timeaxis_x = "DateTime";
}
