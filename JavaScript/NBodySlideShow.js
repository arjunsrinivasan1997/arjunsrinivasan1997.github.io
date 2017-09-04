var slideIndex = 1;
showDivsNB(slideIndex);

function plusDivsNB(n) {
    showDivsNB(slideIndex += n);
}

function showDivsNB(n) {
    var i;
    var x = document.getElementsByClassName("mySlidesnb");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}