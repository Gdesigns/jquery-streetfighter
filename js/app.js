$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '552px');
			}
		);
	})
	.mouseup(function() {
		// ryu goes back to his ready position
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});

$(document).keydown(function(e) {
	if (e.keyCode == 88) {
		// console.log('X key pressed');
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-cool').show();
		$(".sagat, .oh-no").fadeIn('slow');
		}
	})
	
	.keyup(function(e) {
	if (e.keyCode == 88) {
		// console.log('X key released');
		$('.ryu-cool').hide();
		$(".sagat, .oh-no").fadeOut('slow');
		$('.ryu-still').show();
	}
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

$(document).ready(function() {
	$('.streetfighter').delay(500).fadeIn('slow').delay(2500).fadeOut('slow');
	$(".powered, .jquery-logo").delay(4200).fadeIn('fast').delay(3000).fadeOut('fast');
	$(".ryu-fire, .ryu-pose").delay(5000).fadeIn('slow');
});