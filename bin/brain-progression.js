#!/usr/bin/env node
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
import { howdy, welldone } from '../src/utils.js';

function generateArithmeticProgression(hiddenIndex) {
  const progression = [];
  const start = Math.floor(Math.random() * 10);
  const diff = Math.floor(Math.random() * 5 + 3);
  const length = Math.floor(Math.random() * 5 + 5);

  let hiddenValue;
  
  for (let i = 0; i < length; i++) {
    const newValue = start + i * diff;
    
    if (i === hiddenIndex) {
      hiddenValue = newValue;
      progression.push('..');
    } else {
      progression.push(newValue);
    }
  }

  return { progression, hiddenValue };
}
export default function getProgression() {
  howdy();
  let count = 0;
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const progressIndex = Math.floor(Math.random() * 5 + 3);
    const randomStart = Math.floor(Math.random() * 10);
    const progressLength = Math.floor(Math.random() * 5 + 5);
    const randomHiddenNum = Math.floor(Math.random() * progressLength);

    const arrayProgress = [randomStart];
    for (let j = 0; j < progressLength; j += 1) {
      arrayProgress.push(arrayProgress[arrayProgress.length - 1] + progressIndex);
    }
    const correctAnswer = arrayProgress.splice(randomHiddenNum, 1, '..');
    console.log(`Question: ${arrayProgress.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === Number(correctAnswer)) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (count === 3) {
    welldone();
  }
}
getProgression();
