

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

