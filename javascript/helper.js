var previous_agent = navigator.userAgent;
var          agent = navigator.userAgent;
var     previous_q;
var              q;

var viewportheight;

function show(step) {
    var entries = ['absolute0','absolute1','absolute2','absolute_and_web','percentage','percentage_and_web','categories_vulns','categories_exploits'];
    var ids = [];
    var files = [];
    for (var i = 0; i < entries.length; i++) {
        ids.push('#' + entries[i]);
        files.push('./output/' + entries[i] + '.' + step + '.png');
        $(ids[i]).attr('src',files[i])
    }
}


function toggle(sub) {
    var current = $('#' + sub).css("display");
    if (current == 'none')  $('#' + sub).css("display", "block");
    if (current == 'block') $('#' + sub).css("display", "none");
}

function reset() {
	$('.entry').css("font-size","20px");
	$('.entry').css("height", "20px");
	$('.subx').css("display", "none");
}

(function ($) {
	$.fn.vAlign = function() {
		return this.each(function(i){
			$(this).children().wrapAll('<div class="nitinh-vAlign" style="position:relative;"></div>');
			var div = $(this).children('div.nitinh-vAlign');
			var ph = $(this).innerHeight();
			var dh = div.height();
			var mh = (ph - dh) / 3;
			div.css('top', mh);
		});
	};
})(jQuery);


function init() {
	userAgent = navigator.userAgent;

	if (userAgent.search(/windows/i)      != -1)   { agent = 'windows'; }
	else if (userAgent.search(/iphone/i)  != -1 ||
	         userAgent.search(/ipod/i)    != -1 ||
	         userAgent.search(/ipad/i)    != -1 ||
	         userAgent.search(/OSX10.7/i) != -1 ||
	         userAgent.search(/10_7/i)    != -1)   { agent = 'iphone';  }
	else if (userAgent.search(/mac/i)     != -1)   { agent = 'mac';     }
	else if (userAgent.search(/android/i) != -1)   { agent = 'android'; }
	else if (userAgent.search(/linux/i)   != -1)   { agent = 'linux';   }
        else                                           { agent = 'huh';     }
	previous_agent = agent;

	switcher(agent);

	if (window.innerHeight < 425) $('#container').css("height",425);
	else 		              $('#container').css("height",window.innerHeight);

	$('#outer').vAlign();
	$('#container').vAlign();
}

function initq() {

	if (window.innerHeight < 425) $('#container').css("height",425);
	else 		              $('#container').css("height",window.innerHeight);

	$('#outer').vAlign();
	$('#container').vAlign();
}


function switcher(agent) {
	if (agent == 'windows') {
		$('#windows.entry').css("font-size", "50px");
		$('#windows.entry').css("height", "100px");
		$('#sub-windows.subx').css("display", "block");
	} else if (agent == 'iphone') {
		$('#iphone.entry').css("font-size", "50px");
		$('#iphone.entry').css("height", "100px");
		$('#sub-iphone.subx').css("display", "block");
	} else if (agent == 'mac') {
		$('#mac.entry').css("font-size", "50px");
		$('#mac.entry').css("height","100px");
		$('#sub-mac.subx').css("display", "block");
	} else if (agent == 'android') {
		$('#android.entry').css("font-size", "50px");
		$('#android.entry').css("height", "100px");
		$('#sub-android.subx').css("display", "block");
	} else if (agent == 'linux') {
		$('#linux.entry').css("font-size", "50px");
		$('#linux.entry').css("height", "100px");
		$('#sub-linux.subx').css("display", "block");
	} else if (agent == 'huh') {
                $('#huh.entry').css("font-size", "50px");
                $('#huh.entry').css("height", "120px");
                $('#sub-huh.subx').css("display", "block");
	}
}

function switcherq(q) {
	if (q == 'sw2help') {
		$('#sw2help.entry').css("height", "180px");
		$('#sub-sw2help.subx').css("display", "block");
	} else if (q == 'proxy') {
		$('#proxy.entry').css("height", "140px");
		$('#sub-proxy.subx').css("display", "block");
	} else if (q == 'desk') {
		$('#desk.entry').css("height", "50px");
		$('#sub-desk.subx').css("display", "block");
	} else {
	}
}
