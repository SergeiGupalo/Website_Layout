$(function(){

  $('.slider__intro, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    slidesToShow: 1,
	slidesToScroll: 1,
    infinite: false,
    dots: false,
  });


  $('.header__btn__menu').on('click', function(){
    $('.menu ul').slideToggle();
  });


});