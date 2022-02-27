// this function selects a random choice for the computer turn
function computerPlay() {
    choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// function to play the game
function playRound(playerSelection, computerSelection) {
    turn += 1;
    if (turn > 5) {
        return endGame();
    }
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return showResult('tie');
    } else switch (playerSelection)    {
        
        case 'rock' :
            if (computerSelection === 'paper') {
                return showResult('lose');
            } else {
            return showResult('win');
        };

        case 'paper' :
            if (computerSelection === 'scissors') {
                return showResult('lose')
            } else {
            return showResult('win');
        };
            
        case 'scissors' :
            if (computerSelection === 'rock') {
                return showResult('lose');
            } else {
                return showResult('win');
            };
    }
}   

function showResult(turnResult) {
    if (turnResult == 'win') {
        totalPlayerScore += totalPlayerScore + 1;
    } else if (turnResult == 'lose') {
        totalCompScore += 1;
    }

    const displayResult = document.createElement('div');
    displayResult.textContent = turnResult;
    result.appendChild(displayResult);
}

function endGame() {
    const displayEnd = document.createElement('div');
    displayEnd.textContent = `Final Score: ${totalPlayerScore} - ${totalCompScore}`;
    result.appendChild(displayEnd);
    const buttonDisable = document.querySelectorAll('button');
    buttonDisable.forEach(btn => btn.disabled = true);
}


btn_rock = document.querySelector('#btn-rock');
btn_paper = document.querySelector('#btn-paper');
btn_scissors = document.querySelector('#btn-scissors');
result = document.querySelector('#result');

let totalPlayerScore = 0;
let totalCompScore = 0;
let turn = 0;

btn_rock.addEventListener('click', () => playRound('rock', computerPlay()));
btn_paper.addEventListener('click', () => playRound('paper', computerPlay()));
btn_scissors.addEventListener('click', () => playRound('scissors', computerPlay()));