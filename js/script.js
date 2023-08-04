$('.slider-part').slick({
    infinite:true,
    slidesToShow: 3,
    arrows:true,
    prevArrow:'<i><i class="fa-solid fa-arrow-left left"></i></i>',
    nextArrow:'<i><i class="fa-solid fa-arrow-right right"></i></i>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});
$('.slider').slick({
    infinite:false,
    slidesToShow: 1,
    slidesToScroll:1,
    arrows:false,
    dots:true
});
