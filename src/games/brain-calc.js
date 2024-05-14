import getRandomNum from '../getRandomNum.js';
import runGameFunction from '../gameFunction.js';

const description = 'What is the result of the expression?';
const operator = ['+', '-', '*'];

const result = (newValue, newValue2, getRandomExample) => {
  let expression = 0;
  switch (getRandomExample) {
    case '+':
      expression = newValue + newValue2;
      break;
    case '-':
      expression = newValue - newValue2;
      break;
    case '*':
      expression = newValue * newValue2;
      break;
    default:
  }
  return expression;
};

const getMeCorrectAnswer = () => {
  const getRandomExample = operator[Math.floor(Math.random() * operator.length)];
  const newValue = getRandomNum(1, 10);
  const newValue2 = getRandomNum(1, 10);
  const question = `${newValue} ${getRandomExample} ${newValue2}`;
  const answer = String(result(newValue, newValue2, getRandomExample));
  return [question, answer];
};

const calculateFunction = () => {
  runGameFunction(description, getMeCorrectAnswer);
};

export default calculateFunction;
