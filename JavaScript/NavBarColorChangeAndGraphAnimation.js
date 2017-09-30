var top1 = $('#header').offset().top + 10;
var top2 = $('#about-me').offset().top - 200;
var top3 = $('#skills').offset().top;
var top4 = $('#projects').offset().top;
var top5 = $('#contact').offset().top - 200;
var navBar = $('.navbar');
var animated = false;
var javaBar = $('#java-bar');
var pythonBar = $('#python-bar');
var vbaBar = $('#VBA-bar');
var HTMLBar = $('#HTML5-bar');
var CSSBar = $('#CSS3-bar');
var JavaScriptBar = $('#JavaScript-bar');
var JQueryBar = $('#JQuery-bar');
var SQLBar = $('#SQL-bar');
var CPlusPlusBar = $('#CPlusPlus-bar');
$(document).ready(function () {
    navBar.css('background-color', '#FFFFFF');
    $('#navbar-nav').css('z-index', '5');
});
$(window).resize(function () {
    top1 = $('#header').offset().top + 10;
    top2 = $('#about-me').offset().top - 200;
    top3 = $('#skills').offset().top;
    top4 = $('#projects').offset().top;
    top5 = $('#contact').offset().top;
    // Keeps bar widths proportional to new container width if window is resized
    if (animated) {
        javaBar.css('animation', '');
        javaBar.css('width', '70vw');

        pythonBar.css('animation', '');
        pythonBar.css('width', '70vw');

        vbaBar.css('animation', '');
        vbaBar.css('width', '70vw');

        HTMLBar.css('animation', '');
        HTMLBar.css('width', '50vw');

        CSSBar.css('animation', '');
        CSSBar.css('width', '50vw');

        JavaScriptBar.css('animation', '');
        JavaScriptBar.css('width', '60vw');

        JQueryBar.css('animation', '');
        JQueryBar.css('width', '40vw');

        SQLBar.css('animation', '');
        SQLBar.css('width', '40vw');
        CPlusPlusBar.css('animation', '');
        CPlusPlusBar.css('width', '40vw');
        $('#navbar-nav').css('z-index', '5');


    }

});
function onScroll() {
    $('#navbar-nav').css('z-index', '5');
    //console.log($(document).scrollTop());
    // change color of nav bar
    var position = $(document).scrollTop();
    if (position >= top2) {
        $('#navbar-nav').css('background-color', '#FFF');
    } else {
        $('#navbar-nav').css('background-color', '');
    }
    // Change color of each element in nav bar
    if (position >= top1 && position < top2 - 200) {
        $('#about-me-link').removeClass("active")
    }
    else if (position >= top2 - 100 && position < top3) {
        $('#skills-link').removeClass("active");
        $('#about-me-link').addClass("active");
    } else if (position >= top3 - 200 && position < top4 - 300) {

        $('#about-me-link').removeClass("active");
        $('#skills-link').addClass("active");
        $('#projects-link').removeClass("active");
    } else if (position >= top4 - 200 && position < top5) {
        $('#skills-link').removeClass("active");
        $('#projects-link').addClass("active");
        $('#contact-link').removeClass("active");
    } else if (position >= top5 - 200) {
        $('#projects-link').removeClass("active");
        $('#contact-link').addClass("active");
    }

}
$(document).scroll(function () {
    var position = $(document).scrollTop();
    onScroll();
    // Trigger graph animation
    if (position >= top3 - 200 && position < top4 && !animated) {
        animate();
    }
});
function animate() {
    animated = true;

    javaBar.css('background-color', '#000');
    javaBar.css('animation', 'fullAnimation 3.5s');
    javaBar.css('animation-fill-mode', 'forwards');


    pythonBar.css('background-color', '#000');
    pythonBar.css('animation', 'fullAnimation 3.5s');
    pythonBar.css('animation-fill-mode', 'forwards');


    vbaBar.css('background-color', '#000');
    vbaBar.css('animation', 'fullAnimation 3.5s');
    vbaBar.css('animation-fill-mode', 'forwards');


    HTMLBar.css('background-color', '#000');
    HTMLBar.css('animation', 'threeQuarterAnimation 3.5s');
    HTMLBar.css('animation-fill-mode', 'forwards');

    CSSBar.css('background-color', '#000');
    CSSBar.css('animation', 'threeQuarterAnimation 3.5s');
    CSSBar.css('animation-fill-mode', 'forwards');

    JavaScriptBar.css('background-color', '#000');
    JavaScriptBar.css('animation', 'fourFifthsAnimation 3.5s');
    JavaScriptBar.css('animation-fill-mode', 'forwards');


    JQueryBar.css('background-color', '#000');
    JQueryBar.css('animation', 'sixtyPercentAnimation 3.5s');
    JQueryBar.css('animation-fill-mode', 'forwards');


    SQLBar.css('background-color', '#000');
    SQLBar.css('animation', 'sixtyPercentAnimation 3.5s');
    SQLBar.css('animation-fill-mode', 'forwards');

    CPlusPlusBar.css('background-color', '#000');
    CPlusPlusBar.css('animation', 'sixtyPercentAnimation 3.5s');
    CPlusPlusBar.css('animation-fill-mode', 'forwards');

}
