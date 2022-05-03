console.log("Hello World");

function computerPlay() {
    let rndNum = Math.floor(Math.random()*3);
    let computerSelection;

    if (rndNum === 0) {
        computerSelection = "Rock";
    } else if (rndNum === 1) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }

    return computerSelection
}

function playRound(playerSelection, computerSelection) {
    let outcome;
    let result;

    if (playerSelection.toUpperCase() === "ROCK") {
        playerSelection = "Rock"
        if (computerSelection === "Rock") {
            outcome = "Tie";
        } else if (computerSelection === "Paper") {
            outcome = "Loss";
        } else {
            outcome = "Win";
        }
    } else if (playerSelection.toUpperCase() === "PAPER") {
        playerSelection = "Paper"
        if (computerSelection === "Rock") {
            outcome = "Win";
        } else if (computerSelection === "Paper") {
            outcome = "Tie";
        } else {
            outcome = "Loss";
        }
    } else if (playerSelection.toUpperCase() === "SCISSORS") {
        playerSelection = "Scissors"
        if (computerSelection.toUpperCase() === "Rock") {
            outcome = "Loss";
        } else if (computerSelection === "Paper") {
            outcome = "Win";
        } else {
            outcome = "Tie";
        }
    } else {
        return ("You made a typing error!");
    }

    if (outcome === "Win") {
        result = "You win! " + playerSelection + " beats " + computerSelection;
    } else if (outcome === "Tie") {
        result = "It's a tie!";
    } else {
        result = "You lose! " + computerSelection + " beats " + playerSelection;
    }

    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper or scissors?");
        let computerSelection = computerPlay();
        console.log("PLAYER: " + playerSelection);
        console.log("COMPUTER: " + computerSelection);
        let outcome = playRound(playerSelection, computerSelection);
        console.log(outcome)

        if (outcome.substring(4, 7) === "win") {
            playerScore++;
        } else if (outcome.substring(4, 8) === "lose") {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("Congatulations! You won over 5 rounds")
    } else if (playerScore === computerScore) {
        console.log("It's a tie over 5 rounds")
    } else {
        console.log("Unfortunately you lost over 5 rounds")
    }
}

game()