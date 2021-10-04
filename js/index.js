
$(document).ready(function() {
	$('#pagepiling').pagepiling({
		direction: 'vertical',
		sectionsColor: ['#fff', '#bababa', '#bababa', '#bababa'],
		anchors: ['page1', 'page2', 'page3', 'page4'],
		menu: '#menu',
	});

	
});



	$('.gallery__slider').slick({
		arrows: true,
		dots: true,
		autoplay: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i> </button>',
      nextArrow: '<button id="next" type="button" class="btn btn-juliet"> <i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
	});

