'use strict';

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () { 
   const guessNumber = Number(document.querySelector('.guess').value);

   // const infoField = document.querySelector('.message').textContent;
   if (score > 1) {
      if (!guessNumber) {
         document.querySelector('.message').textContent = '🥴 No number entered';
      } else if (guessNumber === secretNumber) {
         document.querySelector('.message').textContent = '🎆 Correct Guess';
         document.querySelector('body').style.backgroundColor = '#60b347';
         document.querySelector('.number').style.width = '30rem';
         document.querySelector('.number').textContent = secretNumber;
         if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
         }
      } else if (guessNumber > secretNumber) {
         score--;
         document.querySelector('.score').textContent = score;
         document.querySelector('.message').textContent = '👠 Number is lower';
      } else {
         score--;
         document.querySelector('.score').textContent = score;
         document.querySelector('.message').textContent = '🕹 Number is higher';
      }
   } else {
      document.querySelector('.score').textContent = '0';
      document.querySelector('.message').textContent = '🔚 Game Over';
   }
});

document.querySelector('.again').addEventListener('click', reset);

function reset () {
   document.querySelector('.message').textContent = 'Start guessing...';
   score = 20;
   document.querySelector('.score').textContent = score;
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = ''
}
