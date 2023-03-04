'use strict'

// Initial conditions
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;
document.querySelector('.dice').classList.add('hidden');

const rollDice = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const diceImages = document.querySelector('.dice');
const players = document.querySelectorAll('.player');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

let score = 0;
let randomNumber;
let activePlayer;


// Rolling the dice
rollDice.addEventListener('click', function() {
    diceImages.classList.remove('hidden');
    randomNumber = Math.trunc(Math.random() * 6) + 1;
    diceImages.src = `dice-${randomNumber}.png`;
    for (let index = 0; index < players.length; index++) {
        document.getElementById(`current--${index}`).textContent = 0;
        if(players[index].classList.contains('player--active')) {
            score = score + randomNumber;
            document.getElementById(`current--${index}`).textContent = score;
        }
    }
});

// ver o toggle
holdButton.addEventListener('click', function() {
    score = 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
});