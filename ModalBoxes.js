/**
 * Created by arjunsrinivasan on 6/11/17.
 */
// Gathering all the variables. Each Modal needs a modal element, a button element and a span element (the close button)
var databasesModal = document.getElementById('databasesModal');
var bearMapsModal = document.getElementById('BearMapsModal');
var nbodyModal = document.getElementById('NBodyModal');
var schemeModal = document.getElementById('SchemeModal');
var antsModal = document.getElementById('AntsModal');
var yelpModal = document.getElementById('YelpMapsModal');

var databasesButton = document.getElementById("databases");
var bearMapsButton = document.getElementById("bearmaps");
var nbodyButton = document.getElementById("nbody");
var schemeButton = document.getElementById("scheme");
var antsButton = document.getElementById("ants");
var yelpButton = document.getElementById("yelp");

var databasesSpan = document.getElementById("databasesClose");
var bearMapsSpan = document.getElementById("BearMapsClose");
var nbodySpan = document.getElementById("NBodyClose");
var schemeSpan = document.getElementById("SchemeClose");
var antsSpan = document.getElementById("AntsClose");
var yelpSpan =document.getElementById("YelpClose");
// Activating the button onclick functions
databasesButton.onclick = function() {
    databasesModal.style.display = "block";
};
bearMapsButton.onclick = function () {
    bearMapsModal.style.display = "block";
};
nbodyButton.onclick = function () {
    nbodyModal.style.display = "block";
};
schemeButton.onclick = function () {
    schemeModal.style.display = "block";
};
antsButton.onclick = function () {
    antsModal.style.display ="block";
};
yelpButton.onclick = function () {
    yelpModal.style.display ="block";
};
// Activating the span onclick functions (closes the modal) via the close button
databasesSpan.onclick = function() {
    databasesModal.style.display = "none";
};
bearMapsSpan.onclick = function () {
    bearMapsModal.style.display = "none";
};
nbodySpan.onclick = function () {
    nbodyModal.style.display = "none";
};
schemeSpan.onclick = function () {
    schemeModal.style.display = "none";
};
antsSpan.onclick = function () {
    antsModal.style.display = "none";
};
yelpSpan.onclick = function () {
    yelpModal.style.display = "none";
};
// Closes the modal if the viewer clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == databasesModal) {
        databasesModal.style.display = "none";
    } else if(event.target == bearMapsModal) {
        bearMapsModal.style.display = "none"
    } else if (event.target == nbodyModal) {
        nbodyModal.style.display = "none"
    } else if (event.target == schemeModal) {
        schemeModal.style.display = "none"
    } else if (event.target == antsModal) {
        antsModal.style.display = "none"
    } else if (event.target.display == yelpModal) {
        yelpModal.style.display = "none"
    }
};