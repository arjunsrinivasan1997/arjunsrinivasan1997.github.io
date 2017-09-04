var slideIndex = 1;
showDivsDB(slideIndex);

function plusDivsDB(n) {
    showDivsDB(slideIndex += n);
}

function showDivsDB(n) {
    var i;
    var x = document.getElementsByClassName("mySlidesdb");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}