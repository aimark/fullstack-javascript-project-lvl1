#!/usr/bin/env node
import { getUserName, checkAnswer } from '../src/index.js';
import calcGame from '../games/calc.js';

console.log('brain-calc');
console.log('Welcome to the Brain Games!');

const myUserName = getUserName();
const userAnswer = calcGame();
checkAnswer(userAnswer, myUserName);
