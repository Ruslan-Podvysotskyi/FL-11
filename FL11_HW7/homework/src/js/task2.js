let start = confirm('Do you want to play a game?');
let randNumberOne;
let randNumberTwo;
let maxNumberOne = 9;
let maxNumberTwo = 13;
let win = 0;
let game;
let gameAgain;
let question;
let continueGame;
let val;
let resset = 4;
let check = 1;

let msg = {
  range: 'Choose a roulette pocket number from 0 to',
  att: 'Attepts left:',
  prize: 'Total prize:',
  pPrize: 'Possible prize on current attempt:',
  continue: 'Do you want to continue?',
  again: 'Your wants to play again?'
}

let prizeOne = [0, 25, 50, 100];
let prizeTwo = [0, 50, 100, 200];

if (start) {
  randNumberOne = Math.floor(Math.random() * maxNumberOne);
  for (let i = 3; i > 0; i--) {
    val = 8
    game = +prompt(`${msg.range} ${val}\n${msg.att} ${i}\n${msg.prize} ${win}$\n${msg.pPrize} ${prizeOne[i]}$`);
    if (game !== randNumberOne && i === check) {
      alert(`Thank you for your participation. Your prize is: ${win}$`);
      question = confirm(`${msg.again}`);
      if (question) {
        i = resset;
      } else {
        break;
      }
    } else if (game === randNumberOne && i >= check) {
      win = prizeOne[i];
      gameAgain = confirm(`Congratulation, you won! Your prize is: ${win}$. ${msg.continue}`);
      if (gameAgain) {
        randNumberTwo = Math.floor(Math.random() * maxNumberTwo);
        for (let i = 3; i > 0; i--) {
          val = 12;
          game = +prompt(`${msg.range} ${val}\n${msg.att} ${i}\n${msg.prize} ${win}$\n${msg.pPrize} ${prizeTwo[i]}$`);
          if (game !== randNumberTwo && i === check) {
            alert(`Thank you for your participation. Your prize is: ${win}$`);
            break
          } else if (game === randNumberTwo && i >= check) {
            win = win + prizeTwo[i];
            gameAgain = confirm(`Congratulation, you won! Your prize is: ${win}$. ${msg.continue}`);
            if (gameAgain) {
              i = resset;
            } else {
              alert(`Thank you for your participation. Your prize is: ${win}$`);
              break;
            }
          }
        }
        question = confirm(`${msg.again}`);
        if (question) {
          i = resset;
          win = 0;
        } else {
          break;
        }
      } else {
        alert(`Thank you for your participation. Your prize is: ${win}$`);
        question = confirm(`${msg.again}`);
        if (question) {
          i = resset;
          win = 0;
        } else {
          break;
        }
      }
    }
  }
} else {
  alert('You did not become a billionaire, but can.');
}
