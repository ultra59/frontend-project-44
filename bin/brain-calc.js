#!/usr/bin/env node
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
import { howdy, welldone } from '../src/utils.js';

// eslint-disable-next-line consistent-return
export default function calculateFunction() {
  howdy();
  console.log('What is the result of the expression?');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const value1 = Math.round(Math.random() * 100);
    const value2 = Math.round(Math.random() * 20);
    const randomIndex = Math.floor(Math.random() * 3);
    const newArray = ['+', '-', '*'];

    const check = `${value1} ${newArray[randomIndex]} ${value2}`;

    console.log(`Question: ${check}`);
    const answer = readlineSync.question('Your answer: ');

    if (newArray[randomIndex] === '+' && Number(answer) === value1 + value2) {
      console.log('Correct!');
      count += 1;
    }

    if (newArray[randomIndex] === '-' && Number(answer) === value1 - value2) {
      console.log('Correct!');
      count += 1;
    }

    if (newArray[randomIndex] === '*' && Number(answer) === value1 * value2) {
      console.log('Correct!');
      count += 1;
    } else if (newArray[randomIndex] === '+' && Number(answer) !== value1 + value2) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${Number(value1 + value2)}'.
      Let's try again, ${name}!`);
      break;
    } else if (newArray[randomIndex] === '-' && Number(answer) !== value1 - value2) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${Number(value1 - value2)}'.
        Let's try again, ${name}!`);
      break;
    } else if (newArray[randomIndex] === '*' && Number(answer) !== value1 * value2) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${Number(value1 * value2)}'.
          Let's try again, ${name}!`);
      break;
    }
  }
  if (count === 3) {
    welldone();
  }
}
calculateFunction();
