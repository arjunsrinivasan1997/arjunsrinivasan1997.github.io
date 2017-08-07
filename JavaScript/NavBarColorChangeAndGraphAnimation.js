var top1 = $('#header').offset().top + 10;
var top2 = $('#about-me').offset().top - 200;
var top3 = $('#skills').offset().top;
var top4 = $('#projects').offset().top;
var top5 = $('#contact').offset().top;
var animated = false;
var javaBar = $('#java-bar');
var pythonBar = $('#python-bar');
var vbaBar = $('#VBA-bar');
var HTMLBar = $('#HTML5-bar');
var CSSBar = $('#CSS3-bar');
var JavaScriptBar = $('#JavaScript-bar');
var JQueryBar = $('#JQuery-bar');
var SQLBar = $('#SQL-bar');

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
        JavaScriptBar.css('width', '50vw');

        JQueryBar.css('animation', '');
        JQueryBar.css('width', '40vw');

        SQLBar.css('animation', '');
        SQLBar.css('width', '40vw');


    }

});
$(document).scroll(function () {
    $('#nav-bar').css('z-index', '5');
    //console.log($(document).scrollTop());
    // change color of nav bar
    var position = $(document).scrollTop();
    if (position >= top2) {
        $('#nav-bar').css('background-color', '#FFF');
    } else {
        $('#nav-bar').css('background-color', '');
    }
    // Change color of each element in nav bar
    if (position < top2 - 300) {
        $('#about-link').css('color', '');
    }
    else if (position >= top2 - 200 && position < top3 - 100) {
        $('#skills-link').css('color', '');
        $('#about-link').css('color', '#0000ff');
    } else if (position >= top3 - 200 && position < top4 - 100) {

        $('#about-link').css('color', '');
        $('#skills-link').css('color', '#0000ff');
        $('#projects-link').css('color', '');
    } else if (position >= top4 - 200 && position < top5 - 100) {
        $('#skills-link').css('color', '');
        $('#projects-link').css('color', '#0000ff');
        $('#contact-link').css('color', '');
    } else if (position >= top5 - 200) {
        $('#projects-link').css('color', '');
        $('#contact-link').css('color', '0000ff');
    }
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
    JavaScriptBar.css('animation', 'threeQuarterAnimation 3.5s');
    JavaScriptBar.css('animation-fill-mode', 'forwards');


    JQueryBar.css('background-color', '#000');
    JQueryBar.css('animation', 'sixtyPercentAnimation 3.5s');
    JQueryBar.css('animation-fill-mode', 'forwards');


    SQLBar.css('background-color', '#000');
    SQLBar.css('animation', 'sixtyPercentAnimation 3.5s');
    SQLBar.css('animation-fill-mode', 'forwards');

}

