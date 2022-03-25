// Function to set everything to their default value
function reset() {
    turn = 0;
    totalPlayerScore = 0;
    totalCompScore = 0;

    const tieScore = document.querySelector("#tiePoints");
    tieScore.textContent = "";
    const winScore = document.querySelector("#playerPoints");
    winScore.textContent = "";
    const loseScore = document.querySelector("#computerPoints");
    loseScore.textContent = "";
    DIVresult.textContent = "";

    const current_btn = document.querySelectorAll('.btn-numbers');
    if (current_btn.length === 1) {
        current_btn[0].remove();

        attempts = document.querySelector('#attempts');
        for (let i = 0; i < 4; i++) {
            attempts.appendChild(attempts_btns[i]);
        }
    }

    buttonEnable.forEach(btn => btn.disabled = false);
}

function quantity(num) {
    btn_1.disabled = true;
    btn_3.disabled = true;
    btn_5.disabled = true;
    btn_7.disabled = true;
    
    attempts_btns.forEach(btn => {
        if (!(btn.id === `btn-${num}`)) {
            btn.remove();
        }
    })

    chosenNum = parseInt(num);
}

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
    switch(result) {
        case "tie" :
            const tieScore = document.querySelector("#tiePoints");
            tieScore.textContent = tieScore.textContent + "*";
            break;
        case "win" :
            totalPlayerScore += + 1;
            const winScore = document.querySelector("#playerPoints");
            winScore.textContent = winScore.textContent + "*";
            break;
        case "lose" :
            totalCompScore += 1;
            const loseScore = document.querySelector("#computerPoints");
            loseScore.textContent = loseScore.textContent + "*";
            break;
    }

    // Once one of the players reach the chosen number to win, display a message and end the game
    if (totalPlayerScore === chosenNum) {
        const displayResultMessage = document.createElement('div');
        displayResultMessage.textContent = `YOU WIN!!!`;
        DIVresult.appendChild(displayResultMessage);
        endGame();
    } else if (totalCompScore === chosenNum) {
        const displayResultMessage = document.createElement('div');
        displayResultMessage.textContent = `YOU LOSE!`;
        DIVresult.appendChild(displayResultMessage);
        endGame();
    }
}

// This function display the final score and disable the buttons for rock, paper, scissors
function endGame() {
    const displayEnd = document.createElement('div');
    displayEnd.textContent = `Final Score: ${totalPlayerScore} - ${totalCompScore}`;
    const buttonEnable = document.querySelectorAll('button');
    buttonEnable.forEach(btn => {
        // Disable all buttons except reset
        if (!(btn.getAttribute('id') === 'btn-reset')) btn.disabled = true;
    });

    DIVresult.appendChild(displayEnd);
    const body = document.querySelector('body');
    body.appendChild(DIVresult);
}

let turn = 0;
let totalPlayerScore = 0;
let totalCompScore = 0;
let chosenNum = 0;

const DIVresult = document.createElement('div');
DIVresult.setAttribute('id', 'result');

const btn_rock = document.querySelector('#btn-rock');
const btn_paper = document.querySelector('#btn-paper');
const btn_scissors = document.querySelector('#btn-scissors');
const btn_reset = document.querySelector('#btn-reset');
const buttonEnable = document.querySelectorAll('button');

const attempts_btns = document.querySelectorAll('.btn-numbers');
const btn_1 = document.querySelector('#btn-1');
const btn_3 = document.querySelector('#btn-3');
const btn_5 = document.querySelector('#btn-5');
const btn_7 = document.querySelector('#btn-7');

btn_1.addEventListener('click', () => quantity('1'));
btn_3.addEventListener('click', () => quantity('3'));
btn_5.addEventListener('click', () => quantity('5'));
btn_7.addEventListener('click', () => quantity('7'));

btn_reset.addEventListener('click', () => reset());
btn_rock.addEventListener('click', () => playRound('rock', computerPlay()));
btn_paper.addEventListener('click', () => playRound('paper', computerPlay()));
btn_scissors.addEventListener('click', () => playRound('scissors', computerPlay()));