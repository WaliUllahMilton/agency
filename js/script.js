$('.slider-part').slick({
    infinite:true,
    slidesToShow: 3,
    arrows:true,
    prevArrow:'<i><i class="fa-solid fa-arrow-left left"></i></i>',
    nextArrow:'<i><i class="fa-solid fa-arrow-right right"></i></i>',
});
$('.slider').slick({
    infinite:false,
    slidesToShow: 1,
    slidesToScroll:1,
    arrows:false,
    dots:true
});
