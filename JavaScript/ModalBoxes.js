/**
 * Created by arjunsrinivasan on 6/11/17.
 */
// Gathering all the variables. Each Modal needs a modal element, a button element and a span element (the close button)
var databasesModal = document.getElementById('databasesModal');
var bearMapsModal = document.getElementById('BearMapsModal');
var nbodyModal = document.getElementById('NBodyModal');
var schemeModal = document.getElementById('SchemeModal');
var alexaModal = document.getElementById('AlexaModal');
var yelpModal = document.getElementById('YelpMapsModal');

var databasesButton = document.getElementById("databases-text-container");
var bearMapsButton = document.getElementById("bearmaps-text-container");
var nbodyButton = document.getElementById("nbody-text-container");
var schemeButton = document.getElementById("scheme-text-container");
var alexaButton = document.getElementById("Alexa-text-container");
var yelpButton = document.getElementById("yelp-text-container");

var databasesSpan = document.getElementById("databasesClose");
var bearMapsSpan = document.getElementById("BearMapsClose");
var nbodySpan = document.getElementById("NBodyClose");
var schemeSpan = document.getElementById("SchemeClose");
var alexaSpan = document.getElementById("AlexaClose");
var yelpSpan =document.getElementById("YelpClose");
// Activating the button onclick functions

databasesButton.on('click', function(){
    databasesModal.style.display = "block";
});
databasesButton.on('touchstart', function(){
    databasesModal.style.display = "block";
});
databasesButton.on('tap', function(){
    databasesModal.style.display = "block";
});
bearMapsButton.onclick = function () {
    bearMapsModal.style.display = "block";
};
nbodyButton.onclick = function () {
    nbodyModal.style.display = "block";
};
schemeButton.onclick = function () {
    schemeModal.style.display = "block";
};
alexaButton.onclick = function () {
    alexaModal.style.display ="block";
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
alexaSpan.onclick = function () {
    alexaModal.style.display = "none";
};
yelpSpan.onclick = function () {
    yelpModal.style.display = "none";
};
// Closes the modal if the viewer clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target === databasesModal) {
        databasesModal.style.display = "none";
    } else if(event.target === bearMapsModal) {
        bearMapsModal.style.display = "none"
    } else if (event.target === nbodyModal) {
        nbodyModal.style.display = "none"
    } else if (event.target === schemeModal) {
        schemeModal.style.display = "none"
    } else if (event.target === alexaModal) {
        alexaModal.style.display = "none"
    } else if (event.target === yelpModal) {
        yelpModal.style.display = "none"
    }
};