console.log("Hello World");

let computerScore = 0;
let humanScore = 0;


const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");

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

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {

        results.textContent = `Tie! both contestants chose ${humanChoice}!`;
    }

    else if (

        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")

    ) {

        humanScore ++;
        results.textContent =
        `You win! ${humanChoice} beats ${computerChoice}!`;

    }

    else {

        computerScore ++;
        results.textContent =
        `You lose! ${computerChoice} beats ${humanChoice}!`;

    }

    results.textContent +=
    `Score: You ${humanScore} - Computer ${computerScore}`;

    checkWinner();

}

function checkWinner() {

    if (humanScore === 5) {

        results.textContent =
        `You won the game!`;

        disableButtons();
    }

    else if (computerScore === 5) {

        results.textContent = 
        "Computer won the game!";

        disableButtons();
    }
}

function disableButtons() {

    buttons.forEach(button => {


        button.disabled = true;
    });
}

buttons.forEach(button => {

    button.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        
        playRound(button.id, computerSelection);
    });
});
