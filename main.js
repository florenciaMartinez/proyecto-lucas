$(document).ready(function() {
    var altura = $('.hastaAca').offset().top;
    altura = altura / 2



    $(window).on('scroll', function() {
        if ($(window).scrollTop() > altura) {
            $('.menuBlock2').addClass('menuFixed')
            $('.menuBlock').addClass('menuNone');;
        } else {
            $('.menuBlock').removeClass('menuNone');
            $('.menuBlock2').removeClass('menuFixed')
        }
    });

});