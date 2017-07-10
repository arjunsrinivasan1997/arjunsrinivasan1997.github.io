var slideIndex = 1;
showSlidesnb(slideIndex);

function plusSlidesnb(n) {
    showSlidesnb(slideIndex += n);
}

function currentSlidenb(n) {
    showSlidesnb(slideIndex = n);
}

function showSlidesnb(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesnb");
    var dots = document.getElementsByClassName("dotnb");
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