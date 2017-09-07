var slideIndex = 1;
showDivsDS(slideIndex);

function plusDivsDS(n) {
    showDivsDS(slideIndex += n);
}

function showDivsDS(n) {
    var i;
    var x = document.getElementsByClassName("mySlidesds");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}