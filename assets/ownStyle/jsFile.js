$(document).ready(function () {
    var owl = $('.owl-carousel');
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 2
            },

            500: {
                items: 3
            },
            600: {
                items: 4
            },

        }
    })


})