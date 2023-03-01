'use strict';

const buttonOpenModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');

const closeModal = function() {
    document.querySelector('.modal').classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let index = 0; index < buttonOpenModal.length; index++) {
    buttonOpenModal[index].addEventListener('click', function() {
        document.querySelector('.modal').classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
};

document.querySelector('.close-modal').addEventListener('click', closeModal);

document.addEventListener('keydown', function(event) {
    if(event.key === 'Escape') {
        closeModal();
        overlay.classList.add('hidden');
    };
});
