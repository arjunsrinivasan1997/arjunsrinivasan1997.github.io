var slideIndex = 1;
showDivsYM(slideIndex);

function plusDivsYM(n) {
    showDivsYM(slideIndex += n);
}

function showDivsYM(n) {
    var i;
    var x = document.getElementsByClassName("mySlidesym");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}