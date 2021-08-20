// Slick Slider=================================================================
$(document).ready(function () {
    $('.slider').slick({
        // autoplay: true,
        // infinite: false,
        dots: true,
        arrows: false,
        accessibility: false,
        slidesToShow: 1,
        autoplaySpeed: 3000,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [{
            breakpoint: 768,
            settings: {}
        }]
    })
})