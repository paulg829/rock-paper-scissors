console.log("Hello World");

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {

        return "rock";
    }

    else if (randomNumber === 1) {

        return "paper";
    }

    else {
        
        return "scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice() {

    return prompt("Rock, Paper, or Scissors?");

}

console.log(getComputerChoice());

function playRound (humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("Tie!");
    }

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    )
      {

        humanScore ++;

        console.log(`You win! ${humanChoice} beats ${computerChoice}`);

    }

    else {

        computerScore ++;

        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


function playGame() {

    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

    }

    console.log("---------");

    if (humanScore > computerScore) {

        console.log("You won the game!");
    }

    else if (humanScore < computerScore) {

        console.log("Computer wins the game!");

    }

    else {

        console.log("The game ends in a tie!");

    }

    console.log(`Final Score: ${humanScore}, ${computerScore}`);

}

playGame();
