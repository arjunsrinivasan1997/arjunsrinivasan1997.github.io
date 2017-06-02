var top1 = $('#header').offset().top;
var top2 = $('#about-me').offset().top;

$(document).scroll(function() {
    if ($(document).scrollTop() >= top1 && $(document).scrollTop() < top2) {
        $('#nav-bar').css('background-color', '#000');
    } else if($(document).scrollTop() >= top2){
        $('#nav-bar').css('background-color', '#f00');
    }
});