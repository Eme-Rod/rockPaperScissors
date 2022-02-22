function computerPlay() {
    choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return 'Tie';
    } else switch (playerSelection)    {
        case 'rock' :
            if (computerSelection === 'paper') {
                return 'Lose';
            } else return 'Win';
        case 'paper' :
            if (computerSelection === 'scissors') {
                return 'Lose';
            } else return 'Win';
        case 'scissors' :
            if (computerSelection === 'rock') {
                return 'Lose';
            } else return 'Win';
    }
}   

function game() {
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i ++) {
        userChoice = prompt("Rock, Paper or Scissors?");
        gameReport = playRound(userChoice, computerPlay());
        console.log(gameReport);

        if (gameReport === 'Win') {
            playerScore += 1;
        } else if (gameReport === 'Lose') {
            computerScore += 1;
        }
    }
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

game()