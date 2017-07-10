var slideIndex = 1;
showSlidesbm(slideIndex);

function plusSlidesbm(n) {
    showSlidesbm(slideIndex += n);
}

function currentSlidebm(n) {
    showSlidesbm(slideIndex = n);
}

function showSlidesbm(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesbm");
    var dots = document.getElementsByClassName("dotbm");
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