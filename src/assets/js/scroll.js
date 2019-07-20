$(function () {
    'use strict';
    $('.navbar li a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 800);
    });
});