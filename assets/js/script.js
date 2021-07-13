// DOM targeting //
var bio = document.getElementById('bio');

var card1 = document.getElementById('card1');
var card2 = document.getElementById('card2');
var card3 = document.getElementById('card3');

// Variables
var bioInj = [
    "motorcycle enthusiast",
    "long time gamer",
    "movie aficionado",
    "aspiring paleontologist",
    "world class warlock",
    "prolific reader",
    "open source fanatic",
    "petrichor admirer",
    "netflix devotee",
    "parody partaker",
    "eternal optimist"
];

var colors = [
    "lightblue",
    "green",
    "lightgreen",
    "red",
    "orange",
    "pink"
];
var count = 0;

// Randomly Rotating <span> for Bio
function bioInjection () {
    setInterval(function() {

        // Generate random value
        var i = Math.floor(Math.random() * colors.length);
        var j = Math.floor(Math.random() * bioInj.length);
        
        // Update <span> for Bio with content and style
        bio.setAttribute('style', 'color: ' + colors[i]);
        bio.innerText = bioInj[j] + " ";

    // Execute once every second
    },1000);
}

function card1OnClick () {
    if (card1.dataset.state == 'transformed') {
        card1.setAttribute('style', '');
        card1.setAttribute('data-state', '');
    } else {
        card1.setAttribute('style', 'transform:scaleY(1.5);transform:scaleX(2);');
        card1.setAttribute('data-state', 'transformed');
    }
}

card1.addEventListener('click', card1OnClick);

// Call functions that should begin as soon as the page has loaded
function init () {
    bioInjection();
}

init(); // Execute on page load