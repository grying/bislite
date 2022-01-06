$(document).ready(function(){
    $('.slider__inner').slick({
     arrows:false,
     dots:true,
 
    });

    $('.works__inner').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button class="slick-arrow slick-prev"><img src="iamges/slider/slide-left.svg" alt=""></button>',
      nextArrow: '<button class="slick-arrow slick-next"><img src="iamges/slider/slide-right.svg" alt=""></button>',
      responsive: [
        {
          breakpoint: 911,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 681,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 455,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    })
    $('.header__menu-btn').on('click', function(){
      $(".heder__menu-list").toggleClass('heder__menu-list--active');
    })

   

  });