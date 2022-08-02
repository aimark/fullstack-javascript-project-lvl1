#!/usr/bin/env node
import { getUserName, checkAnswer } from '../src/index.js';
import progressionGame from '../games/progression.js';

console.log('brain-progression');
console.log('Welcome to the Brain Games!');

const myUserName = getUserName();
const userAnswer = progressionGame(); 
checkAnswer(userAnswer, myUserName);
