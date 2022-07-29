#!/usr/bin/env node
import { getUserName, checkAnswer } from '../src/index.js';
import { calcGame } from '../games/calc.js';

console.log('brain-calc');
console.log('Welcome to the Brain Games!');

let myUserName = getUserName();
let userAnswer = calcGame();
      
checkAnswer(userAnswer, myUserName);
