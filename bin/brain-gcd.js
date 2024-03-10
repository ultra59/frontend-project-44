#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
import { howdy, welldone } from '../src/utils.js';

function NOD(value1, value2) {
  if (value2 > value1) {
    return String(NOD(value2, value1));
  }
  if (!value2) {
    return value1;
  }
  return String(NOD(value2, value1 % value2));
}

export default function getNod() {
  howdy();
  console.log('Find the greatest common divisor of given numbers.');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const value1 = Math.floor(Math.random() * 50);
    const value2 = Math.floor(Math.random() * 50);
    const check = `${value1} ${value2}`;
    console.log(`Question: ${check}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === NOD(value1, value2)) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${NOD(value1, value2)}'.
      Let's try again, ${name}!`);
      break;
    }
  }
  if (count === 3) {
    welldone();
  }
}
getNod();
