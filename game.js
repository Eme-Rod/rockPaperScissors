function computerPlay() {
    choices = ['rock', 'paper', 'scissors'];
    return choices[floor];
}

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    switch (playerSelection)    {
        case (playerSelection === computerSelection) :
            return "It is a tie!";
            break;
        case 'rock' :
            if (computerSelection === 'paper') {
            return "You Lose! Paper beats Rock"
        } else return "You Win! Rock beats Scissors";
        break;
        case 'paper' :
            if (computerSelection === 'scissors') {
                return "You Lose! Scissors beats Paper"
            } else return "You Win! Paper beats Rock";
        case 'scissors' :
            if (computerSelection === 'rock') {
                return "You Lose! Rock beats Scissors"
            } else return "You Win! Scissors beats Paper";
    }
}