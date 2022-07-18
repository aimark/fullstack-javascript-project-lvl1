import readlineSync from 'readline-sync';

let userName = '';
export const getUserName = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const evenGame = () => {
  let ifRight = true;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const minRange = 0;
    const maxRange = 100;
    const randomNumber = Math.floor(Math.random() * (maxRange - minRange) + minRange);
    const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      ifRight = false;
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (ifRight === true) {
    console.log(`Congratulations, ${userName}!`);
  }
};
