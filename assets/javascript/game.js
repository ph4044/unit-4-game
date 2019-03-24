var targetNumber;  // The number the user is to target.
var totalScore = 0;  // The running total of the user.
var wins = 0;  // The number of user wins.
var losses = 0;  // The number of user losses.
var crystalOneValue, crystalTwoValue, crystalThreeValue, crystalFourValue;  // the value assigned to each crystal, from left to right.

// Functions

function resetGame() {   // resets the game by getting the random numbers for the target and crystal values, setting user total = 0, 
                        // updating scoreboard with wins and losses.
    assignRandomValues();
    totalScore = 0;
    $("#section-total-score").html(totalScore);
    $("#section-random-number").html(targetNumber);
    $("#number-of-wins").text(wins);
    $("#number-of-losses").text(losses);
}

function assignRandomValues() {
    crystalOneValue = getRandomInt(1, 12);     //generate random number for crystalOne between 1 and 12.
    crystalTwoValue = getRandomInt(1, 12);     //generate random number for crystalTwo between 1 and 12.
    crystalThreeValue = getRandomInt(1, 12);   //generate random number for crystalThree between 1 and 12.
    crystalFourValue = getRandomInt(1, 12);    //generate random number for crystalFour between 1 and 12.
    targetNumber = getRandomInt(19, 120);      //generate random number for targetNumber between 19 and 120.
}

function getRandomInt(min, max) {   // generates random integer betwen min and max
    return Math.floor(Math.random() * (max - min + 1) + min);  
}

function checkForResult() {
    if (totalScore === targetNumber) {    // if user score matches target number, increment wins, announce win and reset game.
        wins++;   
        $("#announcement").text("You Win!");
        resetGame();
    }
    else if (totalScore > targetNumber) {  // if user score exceeds target number, increment losses, announce loss and reset game.
        losses++;
        $("#announcement").text("You Lose!");
        resetGame();
    }
}

// Here is the game

resetGame();

$("#crystalOne").on("click", function () {
    totalScore += crystalOneValue;
    $("#section-total-score").text(totalScore);
    checkForResult();
});

$("#crystalTwo").on("click", function () {
    totalScore += crystalTwoValue;
    $("#section-total-score").html(totalScore);
    checkForResult();
});

$("#crystalThree").on("click", function () {
    totalScore += crystalThreeValue;
    $("#section-total-score").html(totalScore);
    checkForResult();
});

$("#crystalFour").on("click", function () {
    totalScore += crystalFourValue;
    $("#section-total-score").html(totalScore);
    checkForResult();
});