import readlineSync from 'readline-sync';
import { getRandomNumber } from '../src/random-num.js';

export const primeGame = () => {
  let ifRight = true;
  const primeArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67];
  console.log('Answer "yes" if given number is prime. Otherwise abswer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(1, 70);
    const correctAnswer = (primeArray.includes(randomNumber)) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if ((primeArray.includes(randomNumber) && userAnswer === 'yes') || (!primeArray.includes(randomNumber) && userAnswer === 'no')) {
      console.log('Correct!');
    } else {
      ifRight = false;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      return ifRight;
    }
  }
  return ifRight;
};
  