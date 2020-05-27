$('.header__slider').slick({
    slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
    autoplaySpeed: 1500,
  	arrows: false,
	dots: true,
});

$('.post__slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
  	arrows: true,
	dots: false,
	infinite: true,
	responsive: [
	    {
	      breakpoint: 1010,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 660,
	      settings: {
	        slidesToShow: 1,
	        dots: false,
	      }
	    }
    ]
});

$('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
});