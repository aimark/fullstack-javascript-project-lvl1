import readlineSync from 'readline-sync';
import { getRandomNumber } from '../src/random-num.js';

export const evenGame = () => {
  let ifRight = true;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber();
    const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
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
