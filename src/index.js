import readlineSync from 'readline-sync';

export const getUserName = () => {
  let userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const checkAnswer = (answer, userName) => {
  if (answer === true) {
    console.log(`Congratulations, ${userName}!`);
    } else {
      console.log(`Let's try again, ${userName}!`);
    }
};
