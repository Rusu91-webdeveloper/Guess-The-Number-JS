'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'corect Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

// COMMENTThe math.random is give us a number betwen 0 and 1
//The Math.trunc return the number without decimal
// we must +1 because without the number will end 19.9999 probably why will gave us 19 without decimal
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//WE create a function in order to DRY our code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  // COMMENT The value usualy which is returned is a string,that's why we must transform it to a NUMBER
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // COMMENT IF the Number is 0 we have this conditions
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!!!';
    // displayMessage is a function wich we create earlier to refactor our code
    displayMessage('No number!!!');

    // COMMENT IF the Number is RIGHT we have this conditions
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Corect number!!!';
    displayMessage('Corect number!!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //COMMENT here we set up the highscore to become NEW HIGHSCORE any time when we reset the page and the score is > than previous Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //COMMENT when GUESS is WRONG(here we refactoring the CODE with if else statement > or < from bellow)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!!!' : 'TOO low!!!';
      displayMessage(guess > secretNumber ? 'Too high!!!' : 'TOO low!!!');
      score--;
      // COMMENThere we give the .score the value of the variable score--
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'Game over';
      displayMessage('Game over');
      document.querySelector('.score').textContent = 0;
    }
  }

  // COMMENT IF the number is Higher we add this conditions
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high!!!';
  //       score--;
  //       // COMMENThere we give the .score the value of the variable score--
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'Game over';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     // COMMENT If the Number is LOWER we add this conditions
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low!!!';
  //       score--;
  //       // COMMENT here we give the .score the value of the variable score--
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'Game over';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

// COMMENT restore the initial condition once we press the >>>>>BUTTON AGAIN<<<<<
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing';
  displayMessage('start Guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
