/*$('.header-top__btn-icon').click(function () {
	$('.header-top__form, .header-top__btn').toggleClass('visible');
});*/
function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();


/*    *      */

$('.sitebar-nav__item').click(function (e) {
	e.preventDefault();

	$(this).find('.sitebar-nav__submenu').toggleClass('submenu-active').css('transition', 'all 0.3s ease 0s');
});

$('.product-slider').slick({
	infinite: false,
	autoplay: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: '<button type="button" class="product-slider__prev product-slider__btn">1</button>',
	nextArrow: '<button type="button" class="product-slider__next product-slider__btn">2</button>'
});


$('[data-fancybox="gallery"]').fancybox({});

$('.page-filter__select').click(function () {
	$(this).find('select').fadeIn();
});

$('.pagination__link').click(function (e) {
	e.preventDefault();
	$('.pagination__link').removeClass('active');
	$(this).addClass('active');
})