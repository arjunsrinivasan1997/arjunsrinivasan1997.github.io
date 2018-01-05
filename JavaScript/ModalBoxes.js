/**
 * Created by arjunsrinivasan on 6/11/17.
 */
// Gathering all the variables. Each Modal needs a modal element, a button element and closing button
var databasesModal = document.getElementById('databasesModal');
var bearMapsModal = document.getElementById('BearMapsModal');
var dataScrapingModal = document.getElementById('DataScrapingModal');
var LMModal = document.getElementById('LMModal');
var alexaModal = document.getElementById('AlexaModal');
var CuddleCubModal = document.getElementById('CuddleCubModal');

var databasesClose = document.getElementById("databasesClose");
var bearMapsClose = document.getElementById("BearMapsClose");
var DataScrapingClose = document.getElementById("DataScrapingClose");
var LMClose = document.getElementById("LMClose");
var alexaClose = document.getElementById("AlexaClose");
var CuddleCubClose =document.getElementById("CuddleCubClose");
function ProjectClickHandler(project) {
    if (project === 0) {
        databasesModal.style.display = "block";
    } else if (project === 1) {
        alexaModal.style.display = "block";
    } else if (project === 2) {
        bearMapsModal.style.display = "block";
    } else if (project === 3) {
        LMModal.style.display = "block";
    } else if (project === 4) {
        CuddleCubModal.style.display = "block";
    }else if (project === 5) {
        dataScrapingModal.style.display = "block";
    }
}


// Adding functionality to the close button
databasesClose.onclick = function() {
    databasesModal.style.display = "none";
};
bearMapsClose.onclick = function () {
    bearMapsModal.style.display = "none";
};
DataScrapingClose.onclick = function () {
    dataScrapingModal.style.display = "none";
};
LMClose.onclick = function () {
    LMModal.style.display = "none";
};
alexaClose.onclick = function () {
    alexaModal.style.display = "none";
};
CuddleCubClose.onclick = function () {
    CuddleCubModal.style.display = "none";
};
// Closes the modal if the viewer clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target === databasesModal) {
        databasesModal.style.display = "none";
    } else if(event.target === bearMapsModal) {
        bearMapsModal.style.display = "none"
    } else if (event.target === dataScrapingModal) {
        dataScrapingModal.style.display = "none"
    } else if (event.target === LMModal) {
        LMModal.style.display = "none"
    } else if (event.target === alexaModal) {
        alexaModal.style.display = "none"
    } else if (event.target === CuddleCubModal) {
        CuddleCubModal.style.display = "none"
    }
};