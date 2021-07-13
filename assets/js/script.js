// DOM targeting //
const bio = document.getElementById('bio');

const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');

// Variables
const bioInj = [
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

const colors = [
    "lightblue",
    "green",
    "lightgreen",
    "red",
    "orange",
    "pink"
];

const cards = [card1, card2, card3];
const cardAnimations = {
    jiggle: function(card) { card.setAttribute('class', 'jiggle'); },
    bounce: function(card) { card.setAttribute('class', 'bounce'); },
    breathe: function(card) { card.setAttribute('class', 'breathe'); }
};

// Randomly Rotating <span> for Bio
function bioInjection () {
    setInterval(function() {

        // Generate random value
        let i = Math.floor(Math.random() * colors.length);
        let j = Math.floor(Math.random() * bioInj.length);
        
        // Update <span> for Bio with content and style
        bio.setAttribute('style', 'color: ' + colors[i]);
        bio.innerText = bioInj[j] + " ";

    // Execute once every second
    },1000);
}

// Randomly animate a card
function livelyCards () {
    setInterval(function() {
        setInterval(function() {
        //Pick a random card
        let i = Math.floor(Math.random() * cards.length);
        //Pick a random animation
        let j = Math.floor(Math.random() * cardAnimations.length);
        // ?Probably? call the random animation function
        cards[i].cardAnimations[j];
        },200) // ...Five times a second
    },30000) // Once every 30 seconds...
}

// Possibly made redundant by CSS Transition
// function card1OnClick () {
//     if (card1.dataset.state == 'transformed') {
//         card1.setAttribute('style', '');
//         card1.setAttribute('data-state', '');
//     } else {
//         card1.setAttribute('style', 'transform:scaleY(1.5);transform:scaleX(2);');
//         card1.setAttribute('data-state', 'transformed');
//     }
// }

// card1.addEventListener('click', card1OnClick);

// Call functions that should begin as soon as the page has loaded
function init () {
    bioInjection();
}

init(); // Execute on page load