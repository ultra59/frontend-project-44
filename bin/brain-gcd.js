#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
import { howdy, welldone } from '../src/utils.js';

function NOD(newValue, newValue2) {
  if (newValue2 > newValue) {
    return String(NOD(newValue2, newValue));
  }
  if (!newValue2) {
    return newValue;
  }
  return String(NOD(newValue2, newValue % newValue2));
}

export default function getNod() {
  howdy();
  console.log('Find the greatest common divisor of given numbers.');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const newValue = Math.floor(Math.random() * 50);
    const newValue2 = Math.floor(Math.random() * 50);
    const check = `${newValue} ${newValue2}`;
    console.log(`Question: ${check}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === NOD(newValue, newValue2)) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${NOD(newValue, newValue2)}'.
      Let's try again, ${name}!`);
      break;
    }
  }
  if (count === 3) {
    welldone();
  }
}
getNod();
