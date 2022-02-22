function computerPlay() {
    choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return"It is a tie!";
    } else switch (playerSelection)    {
            case 'rock' :
                if (computerSelection === 'paper') {
                    return"You Lose! Paper beats Rock"
                } else return("You Win! Rock beats Scissors");
            case 'paper' :
                if (computerSelection === 'scissors') {
                    return"You Lose! Scissors beats Paper"
                } else return"You Win! Paper beats Rock";
            case 'scissors' :
                if (computerSelection === 'rock') {
                    return "You Lose! Rock beats Scissors"
                } else return"You Win! Scissors beats Paper";
        }
    }   

console.log(round('Rock', computerPlay()))