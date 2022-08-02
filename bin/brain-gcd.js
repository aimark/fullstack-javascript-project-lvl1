#!/usr/bin/env node
import { getUserName, checkAnswer } from '../src/index.js';
import gcdGame from '../games/gcd.js';

console.log('brain-gcd');
console.log('Welcome to the Brain Games!');

const myUserName = getUserName();
const userAnswer = gcdGame(); 
checkAnswer(userAnswer, myUserName);
