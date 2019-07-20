var clock;

$(document).ready(function () {

    clock = $('.clock').FlipClock(240, {
        clockFace: 'MinuteCounter',
        countdown: true,
        callbacks: {
            stop: function () {
                $('.message').html('The clock has stopped!');
            }
        }
    });

});