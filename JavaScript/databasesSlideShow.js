var slideIndex = 1;
showSlidesdb(slideIndex);

function plusSlidesdb(n) {
    showSlidesdb(slideIndex += n);
}

function currentSlidedb(n) {
    showSlidesdb(slideIndex = n);
}

function showSlidesdb(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesdb");
    var dots = document.getElementsByClassName("dotdb");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}