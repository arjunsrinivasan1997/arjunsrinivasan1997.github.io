var slideIndex = 1;
showDivsAl(slideIndex);

function plusDivsAl(n) {
    showDivsAl(slideIndex += n);
}

function showDivsAl(n) {
    var i;
    var x = document.getElementsByClassName("mySlidesAlexa");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}