#!/usr/bin/env node
import { getUserName, checkAnswer } from '../src/index.js';
import { evenGame } from '../games/even-g.js';

console.log('node bin/brain-even.js');
console.log('Welcome to the Brain Games!');

let myUserName = getUserName();
let userAnswer = evenGame();
      
checkAnswer(userAnswer, myUserName);
