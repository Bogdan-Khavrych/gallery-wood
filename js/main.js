$(function(){
    // Catalog dropdown
    $('.header__nav--catalog').on('click', function () {
        $(this).siblings('ul').toggleClass('active')
        $(this).toggleClass('active')
        $('.header__nav--icon').toggleClass('active')
    })

    // Catalog dropdown adaptive
    $('.header__mob-menu--drop').on('click', function () {
      $(this).siblings('ul').toggleClass('active')
      $(this).toggleClass('active')
      $('.header__mob-menu-list').toggleClass('disable')
      $('.mob--menu--icon').toggleClass('active')
    })

    // $("#menuToggle input").on( "click", function() {
    //   if ($(this).is(":checked")){
    //     $('html, body').css('overflow', 'hidden');
    //     $('html, body').css('max-height', '0');
    //   }
    //   else{
    //     $('html, body').css('overflow', 'visible');
    //     $('html, body').css('max-height', 'auto');
    //   }
    // });

    // Slider
    $('.slider__wrapper').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      speed: 1000,

      prevArrow:'<i class="slick-arrow slick-arrow-left far fa-chevron-left"></i>',
      nextArrow: '<i class="slick-arrow slick-arrow-right far fa-chevron-right"></i>',

      responsive: [
        {
          breakpoint: 520,
          settings: {
            arrows: false,
            dots: false,
          }
        },
      ]
    });

    // Gallery magnific popup
    $('.gallery__wrapper, .page-product__gallery').magnificPopup({
      type: 'image',
      delegate: 'a',
      gallery: {
        enabled: true
      }
    });

    // Clients slider
    $('.clients__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      speed: 500,

      prevArrow:'<i class="slick-arrow slick-arrow-left far fa-chevron-left"></i>',
      nextArrow: '<i class="slick-arrow slick-arrow-right far fa-chevron-right"></i>',
    });
  
    // Popup
    $('.header__btn-link, .header__mob-call-link, .page-product__btn-link').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#username',
      modal: true
    });
    $(document).on('click', '.popup__btn-close', function (e) {
      e.preventDefault();
      $.magnificPopup.close();
    });

    // Animation top fixed
    $('.header__btn-link, .header__mob-call-link, .page-product__btn-link').on('click', function() {
      $('.header__title').toggleClass('close')
    })
    $('.popup__btn-close').on('click', function() {
      $('.header__title').toggleClass('close')
    })
});