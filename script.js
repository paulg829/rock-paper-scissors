console.log("Hello World");


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
