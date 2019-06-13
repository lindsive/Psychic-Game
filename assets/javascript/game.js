var alphabetChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var loss = 0;
var wins = 0;
var guessesRemaining = 9;
var userGuesses = [];

var gamesWon = document.getElementById("gamesWon");
var gamesLost = document.getElementById("gamesLost");
var gameTitle = document.getElementById("heading");
var gameDirections = document.getElementById("directions");
var guessesLeft = document.getElementById("guessesLeft");
var guessList = document.getElementById("guessList");


function game1() {

    document.onkeyup = function (event) {
        var userGuess = event.key;
        if (alphabetChoices.includes(userGuess) == true) {

            userGuesses.push(userGuess);
            var computerGuess = alphabetChoices[Math.floor(Math.random() * alphabetChoices.length)];

            if ((userGuess === computerGuess)) {
                wins++;
                restart();
            } else {
                guessesRemaining--;
            }

            if ((guessesRemaining === 0)) {
                loss++;
                restart();

            }


            gamesWon.textContent = "Wins: " + wins;
            gamesLost.textContent = "Losses: " + loss;
            guessList.textContent = "your guesses so far: " + userGuesses.join(", ");
            guessesLeft.textContent = "Guesses Left: " + guessesRemaining;
        }
        else {
            alert("Please pick a letter");
        };
    };

};

game1();

function restart() {
    guessesRemaining = 9;
    userGuesses = [];
    game1();
};

