$(document).ready(function ($) {

	$('.banner-carousel').owlCarousel({
		loop: true,
		margin: 10,
		dots: false,
		nav: true,
		autoplay: true,
		navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
		mouseDrag: false,
		animateOut: 'slideOutUp',
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	$(".close_icon ").click(function () {
		$(".sideNav").toggleClass("open");
	});

	$(".vdo-link").YouTubePopUp();

	$(".menu_call").click(function () {
		$(".sideNav").toggleClass("open");
	});

	$(".mega-dropdown-toggle").click(function () {
		$(".mega-dropdown-toggle").toggleClass("open");
	});

	jQuery(function ($) {

		$('#mega-dropdown-menu').click(function (e) {
			var getClass = $(".mega-dropdown-toggle").hasClass("open");

			if (getClass == true) {
				$(".mega-dropdown-menu").addClass("open");
				e.stopPropagation();
			} else {
				//$(".mega-dropdown-toggle").addClass("open");
				$(".mega-dropdown-toggle").removeClass("open");
				$(".mega-dropdown-menu").removeClass("open");
				e.stopPropagation();
			}

			e.stopPropagation(); // Prevent bubbling
		});
		$(document).click(function () {
			$(".mega-dropdown-toggle").removeClass("open");
			$(".mega-dropdown-menu").removeClass("open");
		});
		$(document).click(function () {
			$(".mega-dropdown-toggle").addClass("close");
			$(".mega-dropdown-menu").addClass("close");
		});
	});

	//Check if an element was in a screen
	function isScrolledIntoView(elem) {
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();
		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();
		return ((elemBottom <= docViewBottom));
	}

	//Count up code
	function countUp() {
		$('.counter').each(function () {
			var $this = $(this), // <- Don't touch this variable. It's pure magic.
				countTo = $this.attr('data-count');
			ended = $this.attr('ended');

			if (ended != "true" && isScrolledIntoView($this)) {
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 2500, //duration of counting
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
				$this.attr('ended', 'true');
			}
		});
	}
	//Start animation on page-load
	if (isScrolledIntoView(".counter")) {
		countUp();
	}
	//Start animation on screen
	$(document).scroll(function () {
		if (isScrolledIntoView(".counter")) {
			countUp();
		}
	});

	$(window).scroll(function () {

		var scroll = $(window).scrollTop();
		if (scroll) {
			$(".header_area").addClass("bg-white end-0 navbar_fixed position-fixed start-0 top-0");
		} else {
			$(".header_area").removeClass("bg-white end-0 navbar_fixed position-fixed start-0 top-0");
		}

		if ($(window).scrollTop() > 300) {
			$('.gotoTop').addClass('show');
		} else {
			$('.gotoTop').removeClass('show');
		}
	});

	$('.gotoTop').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, '300');
	});
});
