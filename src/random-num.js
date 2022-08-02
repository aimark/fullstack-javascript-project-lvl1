const getRandomNumber = (n = 0, x = 100) => Math.floor(Math.random() * (x - n) + n);
export default getRandomNumber;
