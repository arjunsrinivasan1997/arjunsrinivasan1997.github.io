var slideIndex = 1;
showDivssc(slideIndex);

function plusDivssc(n) {
    showDivssc(slideIndex += n);
}

function showDivssc(n) {
    var i;
    var x = document.getElementsByClassName("mySlidessc");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}