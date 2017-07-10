var slideIndex = 1;
showSlidesAlexa(slideIndex);

function plusSlidesAlexa(n) {
    showSlidesAlexa(slideIndex += n);
}

function currentSlideAlexa(n) {
    showSlidesAlexa(slideIndex = n);
}

function showSlidesAlexa(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesAlexa");
    var dots = document.getElementsByClassName("dotAlexa");
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