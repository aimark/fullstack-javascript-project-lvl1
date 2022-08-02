import readlineSync from 'readline-sync';
import getRandomNumber from '../src/random-num.js';
import getGcd from '../src/gcd-num.js';

export const gcdGame = () => {
  let ifRight = true;
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    let correctAnswer = 0;
    correctAnswer = getGcd(randomNumber1, randomNumber2);
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
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
export default gcdGame;