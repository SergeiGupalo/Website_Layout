
$('.header__slider').slick({
  nextArrow: '<button type="button" class="slick-btn slick-nex"></button>',
  prevArrow: '<button type="button" class="slick-btn slick-pre"></button>',
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
  autoplaySpeed: 1500,
	dots: true
});

$('.slider').slick({
  nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
  prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',

  centerMode: true,
  centerPadding: '20px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
 
});

 $('.header__btn-menu').on('click', function(){
    $('.nav ul').slideToggle();
  });
