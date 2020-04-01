//Adaptive functions
//====================  Mobile Menu ========================//
$('.header-menu__icon').click(function (event) {
	$(this).toggleClass('active');
	$('.header-top-nav').toggleClass('active');
});


$(window).resize(function (event) {
	adaptive_function();
});
function adaptive_header(w, h) {
	var headerMiddle = $('.header-middle');
	var headerNav = $('.header-top-nav');
	var headerСontacts = $('.header-contacts');
	if (w < 620) {
		if (!headerСontacts.hasClass('done')) {
			headerСontacts.addClass('done').appendTo(headerNav);
		}
	} else {
		if (headerСontacts.hasClass('done')) {
			headerСontacts.removeClass('done');
			$(".header__logo").after(headerСontacts);
		}
	}
}
function adaptive_function() {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	adaptive_header(w, h);
}
adaptive_function();