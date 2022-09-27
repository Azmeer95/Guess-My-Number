'use strict';
// queryselector() is a method available in the ddocument object. A CSS selector is passed as parameter.
// . operator executes from left to right: document.querySelector('.message') will return the element first, and then the following operation will be applied.
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// We need the random number once only, hence written outside the handler
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// State variable - score is part of application state
let score = 20;
// The first score is always going to be the highscore
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Listen to event on an element using addEventListener(). Parameter will have type of listener and what it will do. First select that element.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  //   Assuming there is no input
  if (!guess) {
    displayMessage('⚠️ No number!');
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    // Manipulating CSS Styles - propertiies of css will be camel cased in JS and the value will be a string. Gets applied as inline style, doesn't change the css file.
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When wrong guess
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⚡ Too high!' : '⏬ Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😈 Game Over!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // // Guess too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '⚡ Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😈 Game Over!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // // Guess too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '⏬ Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😈 Game Over!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Reset function
document.querySelector('.again').addEventListener('click', function () {
  // Reassign to same variable every time the game restarts
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
});
