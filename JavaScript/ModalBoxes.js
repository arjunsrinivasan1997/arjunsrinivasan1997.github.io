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
// Project number starts at top left project, and is zero indexed
function ProjectClickHandler(project) {
    if (project === 0) {
        databasesModal.style.display = "block";
    } else if (project === 1) {
        alexaModal.style.display = "block";
    } else if (project === 2) {
        bearMapsModal.style.display = "block";
    } else if (project === 3) {
        schemeModal.style.display = "block";
    } else if (project === 4) {
        yelpModal.style.display = "block";
    }else if (project === 5) {
        nbodyModal.style.display = "block";
    }
}

/*$('#databases-text-container').on('touchstart tap click touch', function(){
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
*/
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