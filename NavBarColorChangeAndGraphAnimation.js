var top1 = $('#header').offset().top;
var top2 = $('#about-me').offset().top;
var top3 = $('#skills').offset().top;
var top4 = $('#projects').offset().top;
var animated = false;


$(document).scroll(function() {
    console.log($(document).scrollTop());
    // change color of nav bar
    $('#nav-bar').css('z-index', '5');
    if ($(document).scrollTop() >= top1 && $(document).scrollTop() < top2) {
        $('#nav-bar').css('background-color', '');
    } else if($(document).scrollTop() >= top2 ) {
        $('#nav-bar').css('background-color', '#FFF');
    }
    if ($(document).scrollTop() >= top3 && $(document).scrollTop() <top4 && !(animated)){
        animated = true;
        $('#java-bar').css('text-align','right');
        $('#java-bar').css('background-color', '#000');
        $('#java-bar').css('animation', 'fullAnimation 3.5s');
        $('#java-bar').css('animation-fill-mode', 'forwards');
        $('.java-image').css('background-color', '#FFF');
        $('.java-image').css('animation', 'fullAnimationPicture 3.5s');
        $('.java-image').css('animation-fill-mode', 'forwards');

        $('#python-bar').css('background-color', '#000');
        $('#python-bar').css('animation', 'fullAnimation 3.5s');
        $('#python-bar').css('animation-fill-mode', 'forwards');
        $('.python-image').css('background-color', '#FFF');
        $('.python-image').css('animation', 'fullAnimationPicture 3.5s');
        $('.python-image').css('animation-fill-mode', 'forwards');

        $('#VBA-bar').css('background-color', '#000');
        $('#VBA-bar').css('animation', 'fullAnimation 3.5s');
        $('#VBA-bar').css('animation-fill-mode', 'forwards');
        $('.VBA-image').css('background-color', '#FFF');
        $('.VBA-image').css('animation', 'fullAnimationPicture 3.5s');
        $('.VBA-image').css('animation-fill-mode', 'forwards');

        $('#HTML5-bar').css('background-color', '#000');
        $('#HTML5-bar').css('animation', 'threeQuarterAnimation 3.5s');
        $('#HTML5-bar').css('animation-fill-mode', 'forwards');
        $('.HTML5-image').css('background-color', '#FFF');
        $('.HTML5-image').css('animation', 'threeQuarterAnimationPicture 3.5s');
        $('.HTML5-image').css('animation-fill-mode', 'forwards');

        $('#CSS3-bar').css('background-color', '#000');
        $('#CSS3-bar').css('animation', 'threeQuarterAnimation 3.5s');
        $('#CSS3-bar').css('animation-fill-mode', 'forwards');
        $('.CSS3-image').css('background-color', '#FFF');
        $('.CSS3-image').css('animation', 'threeQuarterAnimationPicture 3.5s');
        $('.CSS3-image').css('animation-fill-mode', 'forwards');

        $('#JavaScript-bar').css('background-color', '#000');
        $('#JavaScript-bar').css('animation', 'threeQuarterAnimation 3.5s');
        $('#JavaScript-bar').css('animation-fill-mode', 'forwards');
        $('.JavaScript-image').css('background-color', '#FFF');
        $('.JavaScript-image').css('animation', 'threeQuarterAnimationPicture 3.5s');
        $('.JavaScript-image').css('animation-fill-mode', 'forwards');


        $('#JQuery-bar').css('background-color', '#000');
        $('#JQuery-bar').css('animation', 'sixtyPercentAnimation 3.5s');
        $('#JQuery-bar').css('animation-fill-mode', 'forwards');
        $('.JQuery-image').css('background-color', '#FFF');
        $('.JQuery-image').css('animation', 'sixtyPercentAnimationPicture 3.5s');
        $('.JQuery-image').css('animation-fill-mode', 'forwards');



        $('#SQL-bar').css('background-color', '#000');
        $('#SQL-bar').css('animation', 'sixtyPercentAnimation 3.5s');
        $('#SQL-bar').css('animation-fill-mode', 'forwards');
        $('.SQL-image').css('background-color', '#FFF');
        $('.SQL-image').css('animation', 'sixtyPercentAnimationPicture 3.5s');
        $('.SQL-image').css('animation-fill-mode', 'forwards');









    }

});