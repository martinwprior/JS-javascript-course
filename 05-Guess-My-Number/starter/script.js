'use strict';
/*^
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';
// select classes and alter textContent and values
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 24;
console.log(document.querySelector('.guess').value);

*/

// select the button with Check!. Has two classes btn and check
// btn also refers to a nother button on page so we choose check to be
// specific to this button.

// the function below is passed to the addEventListener as a "value" the first
// parameter being the "click"

// only called when the field with class .check is clicked.
// define secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //set initial score to 20
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  // added a selector to change the class .message as well when the btton is clicked
  // document.querySelector('.message').textContent = '🎉 Correct Number';

  // when no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //code challenge
    highscore = score;
    //  console.log(score, highscore);
    if (highscore <= score) {
      document.querySelector('.highscore').textContent = highscore;
    }

    // end code challenge

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
