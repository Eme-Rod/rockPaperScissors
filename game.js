// this function selects a random choice for the computer
function computerPlay() {
    choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {
    turn += 1;

    if (playerChoice === computerChoice) {
        showResult('tie');
    } else switch (playerChoice)    {
        case 'rock' :
            if (computerChoice === 'paper') {
                showResult('lose');
            } else {
                showResult('win');
            };
            break;

        case 'paper' :
            if (computerChoice === 'scissors') {
                showResult('lose')
            } else {
                showResult('win');
            };
            break;
            
        case 'scissors' :
            if (computerChoice === 'rock') {
                showResult('lose');
            } else {
                showResult('win');
            };
            break;
    }
}

function showResult(result) {
    if (result === 'win') {
        totalPlayerScore += + 1;
    } else if (result ==='lose') {
        totalCompScore += 1;
    }

    const displayResult = document.createElement('div');
    displayResult.textContent = result;
    DIVresult.appendChild(displayResult);

    if (turn === 5) {
        endGame();
    }
}

function endGame() {
    const displayEnd = document.createElement('div');
    displayEnd.textContent = `Final Score: ${totalPlayerScore} - ${totalCompScore}`;
    const buttonDisable = document.querySelectorAll('button');
    buttonDisable.forEach(btn => btn.disabled = true);

    DIVresult.appendChild(displayEnd);
}

let turn = 0;
let totalPlayerScore = 0;
let totalCompScore = 0;

btn_rock = document.querySelector('#btn-rock');
btn_paper = document.querySelector('#btn-paper');
btn_scissors = document.querySelector('#btn-scissors');
DIVresult = document.querySelector('#result');

btn_rock.addEventListener('click', () => playRound('rock', 'paper'));
btn_paper.addEventListener('click', () => playRound('paper', 'scissors'));
btn_scissors.addEventListener('click', () => playRound('scissors', computerPlay()));