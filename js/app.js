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

$(document).keydown(function(event) {
	if (event.which == 88) {
		// console.log('X key pressed');
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-cool').show();
		}
	})
	
	.keyup(function(event) {
	if (event.which == 88) {
		// console.log('X key released');
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	}
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.2;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}