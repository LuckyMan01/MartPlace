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

      $('.follower__inner').slick({ 
        slidesToShow: 3,
        slidesToScroll: 3, 
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.follower-prev'),
        nextArrow: $('.follower-next')
      });
      
      $(".rate-star").rateYo({
        rating: 5,
        readOnly: true,
        starWidth: "12px"
      });

});