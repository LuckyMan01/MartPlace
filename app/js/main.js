$(function(){

    var mixer = mixitup('.container');

    $('.header__slider-inner').slick({ 
        slidesToShow: 1,
        slidesToScroll: 1, 
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
      });

      $('.product__inner-slider').slick({ 
        slidesToShow: 1,
        slidesToScroll: 1, 
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.product-prev'),
        nextArrow: $('.product-next')
      });

});