'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function() {
    let number = Number(document.querySelector('.guess').value);

    function displayMessage(message) {
        document.querySelector('.message').textContent = message;
    };

    if(!number) {
        displayMessage('Not a number...');
    } else if (number === randomNumber) {
        displayMessage('You won!!!');

        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            document.querySelector('.highscore').textContent = score;
            highscore = score;
        }
    } else {

        if(score > 1) {
            displayMessage(number > randomNumber ? 'Too high!' : 'Too low!!');

            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('you lose...');
            document.querySelector('.score').textContent = 0;
        };
        
    };
});

document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('.number').textContent = '?';
    console.log(document.querySelector('.number').textContent);

    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = 20;
    score = 20;
    document.querySelector('.guess').value = '';

    if(score < highscore) {
        document.querySelector('.highscore').textContent = highscore;
    }
})