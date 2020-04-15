$(function(){

    // var mixer = mixitup('.release__inner-mix');

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
      $('.feedback__slider').slick({ 
        slidesToShow: 2,
        slidesToScroll: 2, 
        arrows: true,
        prevArrow: $('.feedback-prev'),
        nextArrow: $('.feedback-next')
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
      $('.icon-th-large').on('click', function(){
        $('.icon-th-large').addClass('active');
        $('.icon-sort-amount-asc').removeClass('active');
      });
    
    $('.icon-sort-amount-asc').on('click', function(){
      $('.icon-sort-amount-asc').addClass('active');
      $('.icon-th-large').removeClass('active');
    });

    
    $('.sidebar__box__categori').click(function(){
      $('.sidebar__box-list-categori').toggleClass('list-box');
    });
    $('.sidebar__box__product').click(function(){
      $('.sidebar__box-list-product').toggleClass('list-box');
    });
    $('.sidebar__box-range-categori').click(function(){
      $('.sidebar__box--categori').toggleClass('list-box');
    });
    


    $('.pagination__arrow-left').click(function(){
      $('.pagination__arrow-left').addClass('pagination-active__arrow');
      $('.pagination__arrow-right').removeClass('pagination-active__arrow');
    }); 
    $('.pagination__arrow-right').click(function(){
      $('.pagination__arrow-right').addClass('pagination-active__arrow');
      $('.pagination__arrow-left').removeClass('pagination-active__arrow');
    }); 


    $(".sidebar__range").ionRangeSlider({
      type: "double",
      grid: true,
      min: 0,
      max: 1000,
      from: 200,
      to: 800,
      prefix: "$"
  });
    // $(".sidebar__range").ionRangeSlider({
    //   min: 100,
    //   max: 1000,
    //   from: 550
    // });

      $(window).on("load", function () {
        if ($('.release__inner-mix').length) {
            var mixer = mixitup('.release__inner-mix');
          }
        });

});