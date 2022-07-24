import readlineSync from 'readline-sync';

let userName = '';
export const getUserName = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const getRandomNumber = 
  (min = 0, max = 100) => Math.floor(Math.random() * (max - min) + min);

export const getGcd = (x, y) => {
  let a = Math.max(x, y);
  let b = Math.min(x, y);
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

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
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (ifRight === true) {
    console.log(`Congratulations, ${userName}!`);
  }
};

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
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (ifRight === true) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export const progressionGame = () => {
  let ifRight = true;
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const myArray = [];
    let elem = 1;
    let correctAnswer = 0;
    if (i === 0) {
      const randomNumberDelta = getRandomNumber(1, 5);
      for (let x = 0; x < 10; x += 1) {
        elem += randomNumberDelta;
        myArray.push(elem);
      }
      const randomIndex = getRandomNumber(1, 10);
      correctAnswer = myArray[randomIndex];
      console.log(`Question: ${myArray.slice(0, randomIndex).join(' ')} .. ${myArray.slice(randomIndex + 1).join(' ')}`);
    } else if (i === 1) {
      const randomNumberDelta = getRandomNumber(1, 5);
      for (let x = 0; x < 10; x += 1) {
        elem *= randomNumberDelta;
        myArray.push(elem);
      }
      const randomIndex = getRandomNumber(1, 10);
      correctAnswer = myArray[randomIndex];
      console.log(`Question: ${myArray.slice(0, randomIndex).join(' ')} .. ${myArray.slice(randomIndex + 1).join(' ')}`);
    } else {
      elem = 50;
      const randomNumberDelta = getRandomNumber(1, 5);
      for (let x = 0; x < 10; x += 1) {
        elem -= randomNumberDelta;
        myArray.push(elem);
      }
      const randomIndex = getRandomNumber(1, 10);
      correctAnswer = myArray[randomIndex];
      console.log(`Question: ${myArray.slice(0, randomIndex).join(' ')} .. ${myArray.slice(randomIndex + 1).join(' ')}`);
    }
    const userAnswer = Number(readlineSync.question('Your answer: '));
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
