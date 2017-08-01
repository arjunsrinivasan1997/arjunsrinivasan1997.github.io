var top1 = $('#header').offset().top + 10;
var top2 = $('#about-me').offset().top -200 ;
var top3 = $('#skills').offset().top;
var top4 = $('#projects').offset().top;
var top5 = $('#contact').offset().top;
var animated = false;
$(window).resize(function() {
    top1 = $('#header').offset().top + 10;
    top2 = $('#about-me').offset().top -200 ;
    top3 = $('#skills').offset().top;
    top4 = $('#projects').offset().top;
    top5 = $('#contact').offset().top;
});
$(document).scroll(function() {
    $('#nav-bar').css('z-index', '5');
    //console.log($(document).scrollTop());
    // change color of nav bar
    var position = $(document).scrollTop();
    if (position >=top2){
        $('#nav-bar').css('background-color', '#FFF');
    } else {
        $('#nav-bar').css('background-color', '');
    }
    // Change color of each element in nav bar
    if (position <top2 -300){
        $('#about-link').css('color', '');
    }
    else if (position >= top2 -200 && position < top3 - 100) {
        $('#skills-link').css('color', '');
        $('#about-link').css('color', '#0000ff');
    } else if(position >= top3 -200 && position <top4 -100) {

        $('#about-link').css('color', '');
        $('#skills-link').css('color', '#0000ff');
        $('#projects-link').css('color', '');
    } else if (position >= top4 -200  && position <top5-100){
        $('#skills-link').css('color', '');
        $('#projects-link').css('color', '#0000ff');
        $('#contact-link').css('color','');
    } else if (position >= top5 -200){
        $('#projects-link').css('color', '');
        $('#contact-link').css('color','0000ff');
    }
    // Trigger graph animation
    if (position >= top3 - 200 && position < top4 && !animated) {
        animated = true;
        var javaBar = $( '#java-bar' );
        var javaImage = $('.java-image');
        javaBar.css('background-color', '#000');
        javaBar.css('animation', 'fullAnimation 3.5s');
        javaBar.css('animation-fill-mode', 'forwards');
        javaImage.css('animation', 'fullAnimationPicture 3.5s');
        javaImage.css('animation-fill-mode', 'forwards');

        var pythonBar = $('#python-bar');
        var pythonImage = $('.python-image');
        pythonBar.css('background-color', '#000');
        pythonBar.css('animation', 'fullAnimation 3.5s');
        pythonBar.css('animation-fill-mode', 'forwards');
        pythonImage.css('animation', 'fullAnimationPicture 3.5s');
        pythonImage.css('animation-fill-mode', 'forwards');

        var vbaBar = $('#VBA-bar');
        var vbaImage = $('.VBA-image');
        vbaBar.css('background-color', '#000');
        vbaBar.css('animation', 'fullAnimation 3.5s');
        vbaBar.css('animation-fill-mode', 'forwards');
        vbaImage.css('animation', 'fullAnimationPicture 3.5s');
        vbaImage.css('animation-fill-mode', 'forwards');

        $('#HTML5-bar').css('background-color', '#000');
        $('#HTML5-bar').css('animation', 'threeQuarterAnimation 3.5s');
        $('#HTML5-bar').css('animation-fill-mode', 'forwards');
        $('.HTML5-image').css('animation', 'threeQuarterAnimationPicture 3.5s');
        $('.HTML5-image').css('animation-fill-mode', 'forwards');

        $('#CSS3-bar').css('background-color', '#000');
        $('#CSS3-bar').css('animation', 'threeQuarterAnimation 3.5s');
        $('#CSS3-bar').css('animation-fill-mode', 'forwards');
        $('.CSS3-image').css('animation', 'threeQuarterAnimationPicture 3.5s');
        $('.CSS3-image').css('animation-fill-mode', 'forwards');

        $('#JavaScript-bar').css('background-color', '#000');
        $('#JavaScript-bar').css('animation', 'threeQuarterAnimation 3.5s');
        $('#JavaScript-bar').css('animation-fill-mode', 'forwards');
        $('.JavaScript-image').css('animation', 'threeQuarterAnimationPicture 3.5s');
        $('.JavaScript-image').css('animation-fill-mode', 'forwards');


        $('#JQuery-bar').css('background-color', '#000');
        $('#JQuery-bar').css('animation', 'sixtyPercentAnimation 3.5s');
        $('#JQuery-bar').css('animation-fill-mode', 'forwards');
        $('.JQuery-image').css('animation', 'sixtyPercentAnimationPicture 3.5s');
        $('.JQuery-image').css('animation-fill-mode', 'forwards');


        $('#SQL-bar').css('background-color', '#000');
        $('#SQL-bar').css('animation', 'sixtyPercentAnimation 3.5s');
        $('#SQL-bar').css('animation-fill-mode', 'forwards');
        $('.SQL-image').css('animation', 'sixtyPercentAnimationPicture 3.5s');
        $('.SQL-image').css('animation-fill-mode', 'forwards');



    }
});


