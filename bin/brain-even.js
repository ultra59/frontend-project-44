#!/usr/bin/env node
import getRandomNum from '../src/getRandomNum.js';
import runGameFunction from '../src/gameFunction.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const etCorrectAnswer = () => {
  const question = getRandomNum(1, 10);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const brainEven = () => {
  runGameFunction(description, etCorrectAnswer);
};
brainEven();
