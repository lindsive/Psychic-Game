


var alphabetChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var loss = 0;
var wins= 0;

var gamesWon = document.getElementById("gamesWon");
var gamesLost = documeent.getElementById("gamesLost");
var gameTitle = document.getElementById("heading");
var gameDirections = document.getElementById("directions");
var guessesLeft = document.getElementById("guessesLeft");


document.onkeyup = function(event) {
    var userGuess = event.key;

    var computerGuess = alphabetChoices[Math.floor(math.random() * alphabetChoices.length)];

    if ((userGuess === computerGuess)) {
        wins++;
    } else {
        loss++;
    }


gamesWon.textContent = wins;
gamesLost.textContent= loss;

};

