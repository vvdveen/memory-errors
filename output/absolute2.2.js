function absolute2() {
canvas = document.getElementById("absolute2");
ctx = canvas.getContext("2d");
// Reinitialize mouse tracking and zoom for this particular plot
if ((typeof(gnuplot.active_plot) == "undefined" || gnuplot.active_plot != absolute2)  &&  typeof(gnuplot.mouse_update) != "undefined") {
  gnuplot.active_plot_name = "absolute2";
  gnuplot.active_plot = absolute2;
  canvas.onmousemove = gnuplot.mouse_update;
  canvas.onmouseup = gnuplot.zoom_in;
  canvas.onmousedown = gnuplot.saveclick;
  canvas.onkeypress = gnuplot.do_hotkey;
  if (canvas.attachEvent) {canvas.attachEvent('mouseover', absolute2);}
  else if (canvas.addEventListener) {canvas.addEventListener('mouseover', absolute2, false);} 
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
M(700,4680);
L(9759,4680);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(700,4680);
L(800,4680);
ctx.stroke();
ctx.closePath();
T(620,4730,10.0,"Right"," 0");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(700,3950);
L(9759,3950);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(700,3950);
L(800,3950);
ctx.stroke();
ctx.closePath();
T(620,4000,10.0,"Right"," 200");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(700,3220);
L(9759,3220);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(700,3220);
L(800,3220);
ctx.stroke();
ctx.closePath();
T(620,3270,10.0,"Right"," 400");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(700,2491);
L(9759,2491);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(700,2491);
L(800,2491);
ctx.stroke();
ctx.closePath();
T(620,2541,10.0,"Right"," 600");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(700,1761);
L(9759,1761);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(700,1761);
L(800,1761);
ctx.stroke();
ctx.closePath();
T(620,1811,10.0,"Right"," 800");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(700,1031);
L(9759,1031);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(700,1031);
L(800,1031);
ctx.stroke();
ctx.closePath();
T(620,1081,10.0,"Right"," 1000");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(700,301);
L(9759,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(700,301);
L(800,301);
ctx.stroke();
ctx.closePath();
T(620,351,10.0,"Right"," 1200");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(700,4680);
L(700,4630);
M(838,4680);
L(838,4630);
M(978,4680);
L(978,4630);
M(1117,4680);
L(1117,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(1258,4680);
L(1258,660);
M(1258,410);
L(1258,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(1258,4680);
L(1258,4580);
ctx.stroke();
ctx.closePath();
T(1258,4830,10.0,"Center","1998");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(1396,4680);
L(1396,4630);
M(1534,4680);
L(1534,4630);
M(1675,4680);
L(1675,4630);
M(1816,4680);
L(1816,4630);
M(1952,4680);
L(1952,4630);
M(2091,4680);
L(2091,4630);
M(2232,4680);
L(2232,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(2372,4680);
L(2372,660);
M(2372,410);
L(2372,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(2372,4680);
L(2372,4580);
ctx.stroke();
ctx.closePath();
T(2372,4830,10.0,"Center","2000");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(2511,4680);
L(2511,4630);
M(2650,4680);
L(2650,4630);
M(2791,4680);
L(2791,4630);
M(2931,4680);
L(2931,4630);
M(3069,4680);
L(3069,4630);
M(3208,4680);
L(3208,4630);
M(3347,4680);
L(3347,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(3488,4680);
L(3488,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(3488,4680);
L(3488,4580);
ctx.stroke();
ctx.closePath();
T(3488,4830,10.0,"Center","2002");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(3626,4680);
L(3626,4630);
M(3764,4680);
L(3764,4630);
M(3905,4680);
L(3905,4630);
M(4046,4680);
L(4046,4630);
M(4182,4680);
L(4182,4630);
M(4322,4680);
L(4322,4630);
M(4463,4680);
L(4463,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(4602,4680);
L(4602,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(4602,4680);
L(4602,4580);
ctx.stroke();
ctx.closePath();
T(4602,4830,10.0,"Center","2004");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(4741,4680);
L(4741,4630);
M(4881,4680);
L(4881,4630);
M(5022,4680);
L(5022,4630);
M(5161,4680);
L(5161,4630);
M(5299,4680);
L(5299,4630);
M(5438,4680);
L(5438,4630);
M(5578,4680);
L(5578,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(5719,4680);
L(5719,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(5719,4680);
L(5719,4580);
ctx.stroke();
ctx.closePath();
T(5719,4830,10.0,"Center","2006");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(5857,4680);
L(5857,4630);
M(5995,4680);
L(5995,4630);
M(6135,4680);
L(6135,4630);
M(6276,4680);
L(6276,4630);
M(6413,4680);
L(6413,4630);
M(6552,4680);
L(6552,4630);
M(6693,4680);
L(6693,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(6832,4680);
L(6832,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(6832,4680);
L(6832,4580);
ctx.stroke();
ctx.closePath();
T(6832,4830,10.0,"Center","2008");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(6972,4680);
L(6972,4630);
M(7111,4680);
L(7111,4630);
M(7252,4680);
L(7252,4630);
M(7392,4680);
L(7392,4630);
M(7529,4680);
L(7529,4630);
M(7669,4680);
L(7669,4630);
M(7808,4680);
L(7808,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(7949,4680);
L(7949,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(7949,4680);
L(7949,4580);
ctx.stroke();
ctx.closePath();
T(7949,4830,10.0,"Center","2010");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(8087,4680);
L(8087,4630);
M(8225,4680);
L(8225,4630);
M(8366,4680);
L(8366,4630);
M(8507,4680);
L(8507,4630);
M(8643,4680);
L(8643,4630);
M(8783,4680);
L(8783,4630);
M(8923,4680);
L(8923,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(9063,4680);
L(9063,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(9063,4680);
L(9063,4580);
ctx.stroke();
ctx.closePath();
T(9063,4830,10.0,"Center","2012");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(9202,4680);
L(9202,4630);
M(9342,4680);
L(9342,4630);
M(9483,4680);
L(9483,4630);
M(9622,4680);
L(9622,4630);
M(9760,4680);
L(9760,4630);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(700,301);
L(700,4680);
L(9759,4680);
M(9759,301);
M(700,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(000,000,000)";
TR(90,2541,270,10.0,"Center","#Vulnerabilities");
T(5229,4980,10.0,"Center","Date");
T(5229,201,10.0,"Center","Memory errors compared to total number of vulnerabilities");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (typeof(gnuplot.hide_absolute2_plot_1) == "undefined"|| !gnuplot.hide_absolute2_plot_1) {
ctx.lineWidth = 10;
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(139,026,014)";
ctx.strokeStyle = "rgb(000,000,000)";
T(2691,522,10.0,"Right","Memory errors");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(139,026,014)";
ctx.beginPath();
M(1151,472);
L(1571,472);
M(700,4657);
L(830,4653);
L(971,4649);
L(1113,4645);
L(1255,4639);
L(1396,4634);
L(1538,4626);
L(1680,4618);
L(1822,4608);
L(1963,4596);
L(2105,4584);
L(2247,4570);
L(2389,4556);
L(2530,4542);
L(2672,4528);
L(2814,4515);
L(2956,4501);
L(3098,4488);
L(3239,4475);
L(3381,4462);
L(3523,4449);
L(3664,4437);
L(3806,4426);
L(3948,4416);
L(4090,4407);
L(4231,4397);
L(4373,4387);
L(4515,4374);
L(4657,4357);
L(4798,4337);
L(4940,4314);
L(5082,4289);
L(5224,4264);
L(5366,4240);
L(5507,4216);
L(5649,4194);
L(5791,4173);
L(5932,4152);
L(6074,4132);
L(6216,4114);
L(6357,4101);
L(6499,4095);
L(6641,4097);
L(6783,4108);
L(6925,4124);
L(7066,4143);
L(7208,4162);
L(7350,4178);
L(7492,4189);
L(7634,4196);
L(7775,4200);
L(7917,4203);
L(8059,4205);
L(8200,4208);
L(8342,4211);
L(8484,4218);
L(8625,4231);
L(8767,4249);
L(8909,4267);
L(9051,4270);
L(9193,4249);
L(9335,4212);
L(9477,4193);
L(9619,4213);
L(9759,4326);
ctx.stroke();
ctx.closePath();
} // End absolute2_plot_1 
if (typeof(gnuplot.hide_absolute2_plot_2) == "undefined"|| !gnuplot.hide_absolute2_plot_2) {
ctx.lineWidth = 10;
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(094,156,054)";
ctx.strokeStyle = "rgb(000,000,000)";
T(2691,647,10.0,"Right","Total");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(094,156,054)";
ctx.beginPath();
M(1151,597);
L(1571,597);
M(700,4576);
L(830,4559);
L(971,4538);
L(1113,4514);
L(1255,4485);
L(1396,4453);
L(1538,4415);
L(1680,4371);
L(1822,4324);
L(1963,4273);
L(2105,4219);
L(2247,4165);
L(2389,4109);
L(2530,4053);
L(2672,3998);
L(2814,3942);
L(2956,3887);
L(3098,3832);
L(3239,3779);
L(3381,3728);
L(3523,3680);
L(3664,3637);
L(3806,3596);
L(3948,3558);
L(4090,3516);
L(4231,3463);
L(4373,3391);
L(4515,3289);
L(4657,3149);
L(4798,2967);
L(4940,2744);
L(5082,2486);
L(5224,2205);
L(5366,1916);
L(5507,1635);
L(5649,1377);
L(5791,1156);
L(5932,982);
L(6074,860);
L(6216,793);
L(6357,778);
L(6499,807);
L(6641,866);
L(6783,941);
L(6925,1017);
L(7066,1085);
L(7208,1144);
L(7350,1200);
L(7492,1262);
L(7634,1341);
L(7775,1438);
L(7917,1551);
L(8059,1673);
L(8200,1797);
L(8342,1914);
L(8484,2017);
L(8625,2091);
L(8767,2117);
L(8909,2074);
L(9051,1938);
L(9193,1685);
L(9335,1362);
L(9477,1219);
L(9619,1480);
L(9759,1513);
ctx.stroke();
ctx.closePath();
} // End absolute2_plot_2 
ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";

// plot boundaries and axis scaling information for mousing 
gnuplot.plot_term_xmax = 1000;
gnuplot.plot_term_ymax = 500;
gnuplot.plot_xmin = 70.0;
gnuplot.plot_xmax = 975.9;
gnuplot.plot_ybot = 468.0;
gnuplot.plot_ytop = 30.1;
gnuplot.plot_width = 905.9;
gnuplot.plot_height = 437.9;
gnuplot.plot_axis_xmin = -9.4608e+07;
gnuplot.plot_axis_xmax = 4.1809e+08;
gnuplot.plot_axis_ymin = 0;
gnuplot.plot_axis_ymax = 1200;
gnuplot.plot_axis_x2min = "none"
gnuplot.plot_axis_y2min = "none"
gnuplot.plot_logaxis_x = 0;
gnuplot.plot_logaxis_y = 0;
gnuplot.plot_axis_width = gnuplot.plot_axis_xmax - gnuplot.plot_axis_xmin;
gnuplot.plot_axis_height = gnuplot.plot_axis_ymax - gnuplot.plot_axis_ymin;
gnuplot.plot_timeaxis_x = "DateTime";
}
