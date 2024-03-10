#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
import { howdy, welldone } from '../src/utils.js';

let count = 0;

export default function IsEven() {
  howdy();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.round(Math.random() * 100);
    console.log(`${'Question:'} ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      count += 1;
    } else if (number % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${'\'yes\' is wrong answer ;(. Correct answer was \'no\'. \n Let\'s try again,'} ${name}!`);
      break;
    }
  }
  if (count === 3) {
    welldone();
  }
}

IsEven();
