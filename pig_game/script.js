'use strict'

// Initial conditions
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;
document.querySelector('.dice').classList.add('hidden');

const rollDice = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const diceImages = document.querySelector('.dice');


// Rolling the dice
rollDice.addEventListener('click', function() {
    diceImages.classList.remove('hidden');
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    diceImages.src = `dice-${randomNumber}.png`;
});

// ver o toggle