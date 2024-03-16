#!/usr/bin/env node
/* eslint no-eval: 0 */
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
import { howdy, welldone } from '../src/utils.js';

// eslint-disable-next-line consistent-return
export default function calculateFunction() {
  howdy();
  console.log('What is the result of the expression?');
  let count = 0;

  const operator = ['+', '-', '*'];
  
  const askQuestion = () => {
    const newValue = Math.round(Math.random() * 100);
    const newValue2 = Math.round(Math.random() * 20);
    const randomIndex = Math.floor(Math.random() * 3);

    const check = `${newValue} ${operator[randomIndex]} ${newValue2}`;
     console.log(`Question: ${check}`);
  
    const answer = readlineSync.question('Your answer: ');
  
    if ((operator[randomIndex] === '+' && Number(answer) === newValue + newValue2) 
        || (operator[randomIndex] === '-' && Number(answer) === newValue - newValue2)  
        || (operator[randomIndex] === '*' && Number(answer) === newValue * newValue2)) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${answer}' is the wrong answer ;(. Correct answer was '${eval(check)}'. Let's try again, ${name}!`);
      return false;
    }
    
    return true;
  };
  
  for (let i = 0; i < 3; i += 1) {
    if (!askQuestion()) {
      break; 
    }
  }
  
  if (count === 3) {
    welldone();
  }
}

calculateFunction();
