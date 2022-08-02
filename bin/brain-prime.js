#!/usr/bin/env node
import { getUserName, checkAnswer } from '../src/index.js';
import primeGame from '../games/prime.js';

console.log('brain-prime');
console.log('Welcome to the Brain Games!');

const myUserName = getUserName();
const userAnswer = primeGame(); 
checkAnswer(userAnswer, myUserName);
