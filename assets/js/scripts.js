function render_hero() {
	console.log('documentready');

	anime({
		targets: 'div.carousel-caption h2.n',
		translateX: -20,
		opacity: 1,
		duration: 500,
		easing: 'easeInOutQuad'
	});
	anime({
		targets: 'div.carousel-caption p',
		translateX: -20,
		opacity: 1,
		duration: 800,
		easing: 'easeInOutQuad'
	});
	anime({
		targets: 'div.carousel-caption a',
		translateX: -20,
		opacity: 1,
		duration: 400,
		easing: 'easeInQuad'
	});

	var itl = anime.timeline({
		easing: 'easeInQuart',
		duration: 500
	});

	itl
		.add(
			{
				targets: 'div.carousel-caption h2.i',
				scale: 0.58
			},
			100
		)
		.add(
			{
				targets: 'div.carousel-caption h2.i',
				opacity: 1,
				translateX: -10
			},
			100
		);
}

$(document).ready(render_hero());

console.log('oof');

$(document).scroll(function() {
	// console.log('scrollingu')
	var y = window.pageYOffset;
	var wid = window.innerWidth;
	console.log(wid);
	// if (y > 350 && wid > 830) {
	// 	$('nav.navbar.fixed-top.navbar-expand-md').removeClass('navbar-dark');
	// 	$('nav.navbar.fixed-top').addClass('navbar-light');
	// 	console.log('triggered nav code ')
	// }
	// if (y < 350) {//if its at the start  
	// 	$('nav.navbar.fixed-top').removeClass('navbar-light');
	// 	$('nav.navbar.fixed-top').addClass('navbar-dark');

	// }
	// if (wid < 830){
	// 	$('nav.navbar.fixed-top').removeClass('navbar-light');
	// 	$('nav.navbar.fixed-top').addClass('navbar-dark');
	// }


	if (wid < 630 || y < 350) {//screen is mobile size 
		console.log('huh')
		$('.icon-bar').css('display', 'none');
	}else{
		$('.icon-bar').css('display', 'block');
	}
	// 	
	// }else { //if its wide enough 
	// 	
	// 	if (y < 4069) { //if not at the correct y position
	// 		$('.icon-bar').css('display', 'none');
	// 	}
	// 	else {
	// 		$('.icon-bar').css('display', 'block');
	// 	}

	// }
	
});

// parallax
$(function() {
	var $window = $(window);
	$('div[data-type="background"]').each(function() {
		var $bgobj = $(this);
		$window.scroll(function() {
			var ypos = -$window.scrollTop() / $bgobj.data('speed');
			var coords = '50%' + ypos + 'px';
			$bgobj.css({ backgroundPosition: coords });
		});
	});
});
