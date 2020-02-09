$('.slider').slick({
	slidesToShow: 4,
	slidesToScroll: 2,
	autoplay: true,
  autoplaySpeed: 1500,
  	arrows: false,
	dots: true,
	responsive: [
	    {
	      breakpoint: 890,
	      settings: {
	        slidesToShow: 3,
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

$('.slider__item').slick({
	slidesToShow: 4,
	slidesToScroll: 2,
	autoplay: true,
  autoplaySpeed: 1500,
  	arrows: false,
	dots: true,
	responsive: [
	    {
	      breakpoint: 890,
	      settings: {
	        slidesToShow: 3,
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
$('.slider__client-intro').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
  autoplaySpeed: 1500,
  	arrows: false,
	dots: true
});

$('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
});