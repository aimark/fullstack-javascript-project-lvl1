import readlineSync from 'readline-sync';
import { getRandomNumber } from '../src/random-num.js';

export const progressionGame = () => {
  let ifRight = true;
  console.log('What number is missing in the progression?');
  let myArray = [];
  let elem = 0;
  let correctAnswer = 0;
  let randomNumberDelta = 0;
  for (let i = 0; i < 3; i += 1) {
    if (i === 0) {
      randomNumberDelta = getRandomNumber(1, 10);
      for (let x = 0; x < 10; x += 1) {
        elem += randomNumberDelta;
        myArray.push(elem);
      }
    } else if (i === 1) {
      myArray = [];
      elem = 1;
      randomNumberDelta = getRandomNumber(2, 4);
      for (let x = 0; x < 10; x += 1) {
        elem *= randomNumberDelta;
        myArray.push(elem);
      }
    } else {
      myArray = [];
      elem = 100;
      randomNumberDelta = getRandomNumber(1, 10);
      for (let x = 0; x < 10; x += 1) {
        elem -= randomNumberDelta;
        myArray.push(elem);
      }
    }
    const randomIndex = getRandomNumber(1, 10);
    correctAnswer = myArray[randomIndex];
    console.log(`Question: ${myArray.slice(0, randomIndex).join(' ')} .. ${myArray.slice(randomIndex + 1).join(' ')}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      ifRight = false;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      return ifRight;
    }
  }
  return ifRight;
};
  