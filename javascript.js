let playerScore = 0
let computerScore = 0

let playerSelection
let computerSelection

let rounds = prompt("How many rounds would you like to play?", 5)

function getComputerChoice() {
    let value
    value = Math.floor(Math.random() * 3);
    
    const choices = ["rock", "paper", "scissors"]
    
    return choices[value - 1]
}

function finalScore() {
    if (computerScore == playerScore) {
        console.log(`Computer: ${computerScore}    Player: ${playerScore}\nSeems it's a draw!`);
    } else if (computerScore > playerScore) {
        console.log(`Computer: ${computerScore}    Player: ${playerScore}\nYou lost!`);
    } else {
        console.log(`Computer: ${computerScore}    Player: ${playerScore}\nYou won!`);
    }
}

function draw() {
    console.log(`Computer: ${computerScore}    Player: ${playerScore}`);
    console.log("It's a Draw!");
}

function notSameSelection() {
    console.log(`Computer: ${computerScore}    Player: ${playerScore}`);
    console.log("Let's try again shall we?");
}

function computerWin() {
    ++computerScore
    console.log(`Computer: ${computerScore}    Player: ${playerScore}`);
}

function playerWin() {
    ++playerScore
    console.log(`Computer: ${computerScore}    Player: ${playerScore}`);
}

function playRound() {

    playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
    computerSelection = getComputerChoice();

    console.log(`You played: ${playerSelection}     Computer played: ${computerSelection}`)

    if (playerSelection == computerSelection) {
        draw();
        return
    }

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerWin()
            console.log("You lose! Paper beats Rock!")
        } else {
            playerWin()
            console.log("You win! Rock beats Scissors!")
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerWin()
            console.log("You win! Paper beats Rock!")
        } else {
            computerWin()
            console.log("You lose! Scissors beats Paper!")
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerWin()
            console.log("You lose! Rock beats Scissors")
        } else {
            playerWin()
            console.log("You win! Scissors beats Paper")
        }
    }
}

function game(howManyRounds) {
    for (let i = 0; i < rounds; i++) {
        playRound();
    }

    finalScore()
}

game(rounds)
