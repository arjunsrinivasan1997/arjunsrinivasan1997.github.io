var slideIndex = 1;
showDivsBM(slideIndex);

function plusDivsBM(n) {
    showDivsBM(slideIndex += n);
}

function showDivsBM(n) {
    var i;
    var x = document.getElementsByClassName("mySlidesbm");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}