#!/usr/bin/env node
import { getUserName, progressionGame } from '../src/index.js';

console.log('brain-progression');
console.log('Welcome to the Brain Games!');

getUserName();
progressionGame();
