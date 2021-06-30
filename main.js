$(document).ready(function() {
    var altura = $('.soyLucas').offset().top;
    altura = altura - 300
    let altura2 = altura - 2




    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= altura) {
            $('.menuBlock2').addClass('menuFixed')
            $('.menuBlock').addClass('menuNone');;
        } else if ($(window).scrollTop() >= altura2) {
            $('.menuBlock2').addClass('menuFixed')
            $('.menuBlock').addClass('menuNone');;

        } else {
            $('.menuBlock').removeClass('menuNone');
            $('.menuBlock2').removeClass('menuFixed')
        }
    });

    $('#slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })

});