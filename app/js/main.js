$(function(){

   

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
        nextArrow: $('.feedback-next'),
        responsive: [
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });


      $('.follower__inner').slick({ 
        slidesToShow: 3,
        slidesToScroll: 3, 
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.follower-prev'),
        nextArrow: $('.follower-next'),
        responsive: [
          {
            breakpoint: 1135,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });
      
      $(".rate-star").rateYo({
        rating: 4.5,
        readOnly: true,
        starWidth: "12px"
      });
      $('.icon-th-large').on('click', function(){
        $('.icon-th-large').addClass('active');
        $('.sidebar__product').removeClass('list-active');
        $('.sidebar__product-inner').removeClass('active-list');
        $('.icon-sort-amount-asc').removeClass('active');
      });
    
    $('.icon-sort-amount-asc').on('click', function(){
      $('.icon-sort-amount-asc').addClass('active');
      $('.sidebar__product').addClass('list-active');
      $('.sidebar__product-inner').addClass('active-list');
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

    $('.btn-menu').on('click', function () {
      $('.menu__inner-list').slideToggle();
    });

    $(".sidebar__range").ionRangeSlider({
      type: "double",
      min: 0,
      max: 320,
      from: 30,
      to: 300,
      prefix: "$"
  });

  $('.sidebar__price-btn').click(function(){
    $('.sidebar__price-btn').toggleClass('price__btn-menu');
    $('.sidebar__price-btn--off').removeClass('sidebar__price-btn--on');
  }); 
  $('.sidebar__price-btn').click(function(){
    $('.sidebar__price-btn').toggleClass('sidebar__price-btn--on');
  }); 

  $('.wrapper .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
      $('.wrapper .tabs').find('.tab').removeClass('tab-active');
      $(this).addClass('tab-active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    }); 
    
    new WOW().init();
    var mixer = mixitup('.release__inner-mix');
      // $(window).on("load", function () {
      //   if ($('.release__inner-mix').length) {
      //       var mixer = mixitup('.release__inner-mix');
      //     }
      //   });

});