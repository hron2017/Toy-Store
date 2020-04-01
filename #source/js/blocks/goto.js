
$('.goto').click(function () {
	var el = $(this).attr('href').replace('#', '');
	var offset = 0;
	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

	if ($('.header-top-nav').hasClass('active')) {
		$('.header-top-nav,.header-menu__icon').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});