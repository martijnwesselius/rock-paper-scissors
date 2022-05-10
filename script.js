// GAME

let playerScore = 0;
let computerScore = 0;
let roundWinner;

function getComputerSelection() {
    let randomNumber = Math.floor(Math.random()*3);

    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            roundWinner = "Tie";
        } else if (computerSelection === "Paper") {
            roundWinner = "Computer";
            computerScore++;
        } else {
            roundWinner = "Player";
            playerScore++;
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            roundWinner = "Player"
            playerScore++;
        } else if (computerSelection === "Paper") {
            roundWinner = "Tie";
        } else {
            roundWinner = "Computer";
            computerScore++;
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            roundWinner = "Computer";
            computerScore++;
        } else if (computerSelection === "Paper") {
            roundWinner = "Player";
            playerScore++;
        } else {
            roundWinner = "Tie";
        }
    }

    updateMessageAndExplanation(roundWinner, playerSelection, computerSelection);
}

function isGameOver() {
    return (playerScore === 5 || computerScore === 5)
}


// GUI

const message = document.querySelector('.message');
const explanation = document.querySelector('.explanation');
const playerSelectionObject = document.querySelector('#player-selection');
const playerScoreObject = document.querySelector('#player-score');
const computerSelectionObject = document.querySelector('#computer-selection');
const computerScoreObject = document.querySelector('#computer-score');
const buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach(button => button.addEventListener('click', handleClick));

function handleClick(e) {
    if (isGameOver()) {
        openFinalMessage();
        return
    }
    
    const playerSelection = e.target.textContent;
    const computerSelection = getComputerSelection();
    
    playRound(playerSelection, computerSelection);
    updateSelections(playerSelection, computerSelection);
    updateScores();

    if (isGameOver()) {
        openFinalMessage();
        return
    }
}

function updateMessageAndExplanation(winner, playerSelection, computerSelection) {
    if (winner === "Player") {
        message.textContent = "You win!";
        explanation.textContent =  playerSelection + " beats " + computerSelection.toLowerCase();
    } else if (winner === "Computer") {
        message.textContent = "You lose!";
        explanation.textContent = computerSelection + " beats " + playerSelection.toLowerCase();
    } else {
        message.textContent = "It's a tie!";
        explanation.textContent = playerSelection + " ties with " + computerSelection.toLowerCase();
    } 
    return
}

function updateSelections(playerSelection, computerSelection) {
    playerSelectionObject.textContent = playerSelection;
    computerSelectionObject.textContent = computerSelection;
}

function updateScores() {
    playerScoreObject.textContent = "Player: " + playerScore;
    computerScoreObject.textContent = "Computer: " + computerScore;
}

function openFinalMessage() {
    if (playerScore > computerScore) {
        alert("You won!")
    } else {
        alert("You lost...")
    }
}
