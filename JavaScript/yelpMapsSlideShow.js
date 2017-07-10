var slideIndex = 1;
showSlidesym(slideIndex);

function plusSlidesym(n) {
    showSlidesym(slideIndex += n);
}

function currentSlideym(n) {
    showSlidesym(slideIndex = n);
}

function showSlidesym(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesym");
    var dots = document.getElementsByClassName("dotym");
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