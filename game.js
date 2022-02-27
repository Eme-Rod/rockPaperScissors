// this function selects a random choice for the computer turn
function computerPlay() {
    choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// function to play the game
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        displayResult.textContent = "Tie";
    } else switch (playerSelection)    {
        case 'rock' :
            if (computerSelection === 'paper') {
                displayResult.textContent = "Lose";
            } else displayResult.textContent = "Win";
        case 'paper' :
            if (computerSelection === 'scissors') {
                displayResult.textContent = "Lose";
            } else displayResult.textContent = "Win";
        case 'scissors' :
            if (computerSelection === 'rock') {
                displayResult.textContent = "Lose";
            } else displayResult.textContent = "Win";
    }
}   


// function game() {
//     playerScore = 0;
//     computerScore = 0;

//     for (let i = 0; i < 5; i ++) {
//         userChoice = prompt("Rock, Paper or Scissors?");
//         gameReport = playRound(userChoice, computerPlay());
//         console.log(gameReport);

//         if (gameReport === 'Win') {
//             playerScore += 1;
//         } else if (gameReport === 'Lose') {
//             computerScore += 1;
//         }
//     }
//     console.log(`Player Score: ${playerScore}`);
//     console.log(`Computer Score: ${computerScore}`);
// }

btn_rock = document.querySelector('#btn-rock');
btn_paper = document.querySelector('#btn-paper');
btn_scissors = document.querySelector('#btn-scissors');

btn_rock.addEventListener('click', () => playRound('rock', computerPlay()));
btn_paper.addEventListener('click', () => playRound('paper', computerPlay()));
btn_scissors.addEventListener('click', () => playRound('scissors', computerPlay()));

result = document.querySelector('#result');
const displayResult = document.createElement('div');
result.appendChild(displayResult);
