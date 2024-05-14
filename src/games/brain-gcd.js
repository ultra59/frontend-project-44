import getRandomNum from '../getRandomNum.js';
import runGameFunction from '../gameFunction.js';

const description = 'Find the greatest common divisor of given numbers.';

const getNod = () => {
  const newValue = getRandomNum() + 1;
  const newValue2 = getRandomNum() + 1;
  const question = `${newValue} ${newValue2}`;
  let correctAnswer = '';
  for (let i = Math.min(newValue, newValue2); i >= 0; i -= 1) {
    if (newValue % i === 0 && newValue2 % i === 0) {
      correctAnswer = String(i);
      break;
    }
  }
  return [question, correctAnswer];
};

const getNewNod = () => {
  runGameFunction(description, getNod);
};
export default getNewNod;
