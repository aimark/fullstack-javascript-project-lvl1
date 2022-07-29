import readlineSync from 'readline-sync';
import { getRandomNumber } from '../src/random-num.js';

export const calcGame = () => {
    let ifRight = true;
    console.log('What is the result of the expression?');
    for (let i = 0; i < 3; i += 1) {
      const randomNumber1 = getRandomNumber();
      const randomNumber2 = getRandomNumber();
      let correctAnswer = 0;
      if (i === 0) {
        correctAnswer = randomNumber1 + randomNumber2;
        console.log(`Question: ${randomNumber1} + ${randomNumber2}`);
      } else if (i === 1) {
        correctAnswer = randomNumber1 - randomNumber2;
        console.log(`Question: ${randomNumber1} - ${randomNumber2}`);
      } else {
        correctAnswer = randomNumber1 * randomNumber2;
        console.log(`Question: ${randomNumber1} * ${randomNumber2}`);
      }
      const userAnswer = Number(readlineSync.question('Your answer: '));
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
      } else {
        ifRight = false;
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
        return ifRight;
      }
    }
    return ifRight;
  };
