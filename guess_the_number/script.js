'use strict';


function secretNumber(number) {
    return document.querySelector('.number').textContent = number;
}
let randomNumber = secretNumber(Math.trunc(Math.random() * 20) + 1);

let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function() {
    let number = Number(document.querySelector('.guess').value);

    function displayMessage(message) {
        document.querySelector('.message').textContent = message;
    }


    if(!number) {
        displayMessage('Not a number...');
    } else if (number === randomNumber) {
        displayMessage('You won!!!');

        if(score > highscore) {
            document.querySelector('.highscore').textContent = score;
            highscore = score;
        }
    } else {
        score--;
        if(score > 0) {
            document.querySelector('.score').textContent = score;
            console.log(score)
            displayMessage(number > randomNumber ? 'Too high!' : 'Too low!!');
        } else {
            displayMessage('you lose...');
            score = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function() {
    randomNumber = secretNumber(Math.trunc(Math.random() * 20) + 1);
    document.querySelector('.score').textContent = 20;
    score = 20;
    document.querySelector('.guess').value = '';

    if(score < highscore) {
        document.querySelector('.highscore').textContent = highscore;
    }
})