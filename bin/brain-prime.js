#!/usr/bin/env node
import { getUserName, checkAnswer } from '../src/index.js';
import { primeGame } from '../games/prime.js';

console.log('brain-prime');
console.log('Welcome to the Brain Games!');

let myUserName = getUserName();
let userAnswer = primeGame();
      
checkAnswer(userAnswer, myUserName);
