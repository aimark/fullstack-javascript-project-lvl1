import readlineSync from 'readline-sync';
import getRandomNumber from '../src/random-num.js';

export const progressionGame = () => {
  let ifRight = true;
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const myArray = [];
    let elem = 1;
    let correctAnswer = 0;
    const randomNumberDelta = getRandomNumber(1, 10);
    for (let x = 0; x < 10; x += 1) {
      elem += randomNumberDelta;
      myArray.push(elem);
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
export default progressionGame;