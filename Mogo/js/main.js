$(function(){

  $('.slider__intro, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false
  });


  $('.heder__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });


});