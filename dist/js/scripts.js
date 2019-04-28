// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing, {
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c * (t /= d) * t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * ((--t) * (t - 2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c * (t /= d) * t * t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c * (t /= d) * t * t * t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c * (t /= d) * t * t * t * t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t == 0) return b;
		if (t == d) return b + c;
		if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
		return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d) == 1) return b + c;
		if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d) == 1) return b + c;
		if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d / 2) == 2) return b + c;
		if (!p) p = d * (.3 * 1.5);
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * (t /= d) * t * ((s + 1) * t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
		return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t /= d) < (1 / 2.75)) {
			return c * (7.5625 * t * t) + b;
		} else if (t < (2 / 2.75)) {
			return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
		} else if (t < (2.5 / 2.75)) {
			return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
		} else {
			return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	}
});


/* main slider */

$(document).ready(function () {
	$('.main-slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		lazyLoad: 'ondemand',
		fade: true,
		autoplaySpeed: 2500
	});
});


/* Resid slider */

$(document).ready(function () {
	$('.residental-slider__wrapper').slick({
		arrows: true,
		dots: false,
		autoplay: false,
		slidesToScroll: 1,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2
				}
    },
			{
				breakpoint: 767,
				settings: {
					centerPadding: '40px',
					slidesToShow: 1
				}
    }
  ]
	});
});

/* smooth scroll down button */

$(function () {
	$('a[href*="#a-"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 800, 'easeOutCirc');
				return false;
			}
		}
	});
});

/* Live chat */

$('.live-chat-btn').on('click', function (e) {
	e.preventDefault();
	$('.live-chat-reg').css(
		'transform', 'translateX(0)');
});
$('.live-chat-reg__btn').on('click', function (e) {
	e.preventDefault();
	$('.live-chat-reg').css(
		'transform', 'translateX(365px)');
	$('.live-chat').css(
		'transform', 'translateX(0)');
});

$('.live-chat-reg__close').on('click', function () {
	$('.live-chat-reg').css(
		"transform", "translateX(365px)"
	);
});
$('.live-chat__close').on('click', function () {
	$('.live-chat').css(
		"transform", "translateX(365px)"
	);
});

/* Basic search */

$('#search-btn--mini').on('click', function (e) {
	e.preventDefault();
	$('#search-btn--mini').css('display', 'none');
	$('.search-block__form').fadeIn(400);
	$('.line').animate({
		width: "100%"
	}, 400);
})

/* advanced search */

$(document).on('click', '#filter-btn', function (event) {
	event.preventDefault();

	if (!$('.search-wrapper').hasClass('opened')) {
		$('.search-wrapper').addClass('opened');
		$('.search-wrapper').slideDown('slow');
	} else {
		$('.search-wrapper').removeClass('opened');
		$('.search-wrapper').slideUp('slow');
	}
});

/* mobile menu */

$('.page-header__dd-toggle').on('click', function () {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		$('#mobile-menu').fadeOut(300);
	} else {
		$(this).addClass('active');
		$('#mobile-menu').fadeIn(300);
	}
});

$('#filter-btn-mini').on('click', function () {
	$('.mobile-search').fadeIn(300);
});
$('.mobile-search__close').on('click', function () {
	$('.mobile-search').fadeOut(300);
});

/* Change height func */

function reHeight() {
	var emptyBlock = $('.residental-bg').height();
	$('.empty-block').css('height', emptyBlock);
}

reHeight();

$(document).ready(function () {
			$('.residental-slider').fadeOut(250);
			$('.residental').fadeIn(250);
		});


/* Resid hover */

$(document).ready(function () {
	var widWin = $(window).width();
	if (widWin >= 992) {
	$('.residental').hover(function () {
		$('.residental-slider').fadeIn(400);
		$('.residental').css('display', 'none');
		$('.empty-block').css('height', 'calc(100vh - 206px)')
	});
	}
});

$('.residental__toggle').on('click', function () {
	var widWin = $(window).width();
	if (widWin >= 992) {
	$('.residental-slider').fadeOut(400);
	$('.residental').css('display', 'block');
	$('.empty-block').css('height', 'calc(100vh - 305px)')
	}
});

// Resid hover mobile

$(document).ready(function () {
	var widWin = $(window).width();
	if (widWin <= 992) {
	$('.residental').hover(function () {
		$('.residental-slider').fadeIn(400);
		$('.residental').css('display', 'none');
		$('.empty-block').css('height', 'calc(100vh - 146px)')
	});
	}
});

$('.residental__toggle').on('click', function () {
	var widWin = $(window).width();
	if (widWin <= 992) {
	$('.residental-slider').fadeOut(400);
	$('.residental').css('display', 'block');
	$('.empty-block').css('height', 'calc(100vh - 222px)')
	}
});
/* Resid more/less */

$('.residental-slider__more').on('click', function () {
	$('.residental').css('display', 'none');
	$('.residental-slider').css('display', 'none');
	$('.empty-block').css('display', 'none');
	$('.residental-full').css('display', 'block');
});

$('.residental-slider__less').on('click', function () {
	$('.residental-full').css('display', 'none');
	$('.residental').css('display', 'block');
	$('.empty-block').css('display', 'block');
	reHeight();
});

/* Selects */

$(function () {
	$('.simple-select').selectric({
		disableOnMobile: false
	});
});

$(function () {
	$('.reserve-select').selectric({
		disableOnMobile: false
	});
});


/* Our dev slider */

$('.big-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	asNavFor: '.small-slider'
});
$('.small-slider').slick({
	slidesToShow: 9,
	slidesToScroll: 1,
	asNavFor: '.big-slider',
	focusOnSelect: true
});

$('.big-slider-two').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	asNavFor: '.small-slider-two'
});
$('.small-slider-two').slick({
	slidesToShow: 9,
	slidesToScroll: 1,
	asNavFor: '.big-slider-two',
	focusOnSelect: true
});

/* Wrong requireds fields */

$(document).ready(function () {
	var placeholdWrong = $('.reserve__selections-item.wrong').attr('placeholder');
	$('.reserve__selections-item.wrong').attr('placeholder', '*' + ' ' + placeholdWrong);

	if ($('.reserve__selections-item').hasClass('wrong')) {
		$('.ourdevmain__form-wrong').css('display', 'block');
	} else {
		$('.ourdevmain__form-wrong').css('display', 'none');
	}
});

/* our dev download popup */

$(document).ready(function () {

	if ($('.download-popup__form input').hasClass('wrong')) {
		$('.download-popup__wrong').css('display', 'block');
	} else {
		$('.download-popup__wrong').css('display', 'none');
	}
});

$('.downloads-sec__open-popup').on('click', function (e) {
	e.preventDefault();
	var scrPos = $(window).scrollTop();
	$('.download-popup').fadeIn(500);
	$('.download-popup').css({
		'display': 'flex',
		'top': scrPos
	});
})
$('.download-popup__close').on('click', function () {
		$('.download-popup').fadeOut(500);
	})
	/* View on map */

$('#view-map-btn').on('click', function (e) {
	e.preventDefault();
	var scrPos = $(window).scrollTop();
	$('.view-on-map').fadeIn(500);
	$('.view-on-map').css({
		'display': 'flex',
		'top': scrPos
	});
})
$('.view-on-map__close-btn').on('click', function () {
	$('.view-on-map').fadeOut(500);
})

$(function () {
	$("#a-download-sec").tabs();
});
$(function () {
	$("#a-media-sec").tabs();
});
$(function () {
	$("#our-part-tabs").tabs();
});
$(function () {
	$("#a-vision").tabs();
});
$(function () {
	$("#photo-video").tabs();
});
$(function () {
	$("#photo-video2").tabs();
});


$(document).ready(function () {
	$(".fancybox").fancybox({
		helpers: {
			overlay: {
				css: {
					'background': 'rgba(0, 0, 0, 0.85)'
				}
			}
		}
	});
});

$('.aside-nav__link.vision-link').on('click', function(e){
		e.preventDefault();
		if( $('.aside-nav__link.vision').length){
			$('.aside-nav__link.vision').trigger('click');
			$('html, body').animate({scrollTop: $('.aside-nav__link.vision').offset().top-250}, 800, 'easeOutCirc');
		}
	});

$('.aside-nav__link.values-link').on('click', function(e){
		e.preventDefault();
		if( $('.aside-nav__link.values').length){
			$('.aside-nav__link.values').trigger('click');
			$('html, body').animate({scrollTop: $('.aside-nav__link.values').offset().top-250}, 800, 'easeOutCirc');
		}
	});

$('.aside-nav__link.mission-link').on('click', function(e){
		e.preventDefault();
		if( $('.aside-nav__link.mission').length){
			$('.aside-nav__link.mission').trigger('click');
			$('html, body').animate({scrollTop: $('.aside-nav__link.mission').offset().top-250}, 800, 'easeOutCirc');
		}
	});


$( function() {
    $( "#datepicker" ).datepicker();
  } );