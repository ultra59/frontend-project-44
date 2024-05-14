import getRandomNum from '../getRandomNum.js';
import runGameFunction from '../gameFunction.js';

const description = 'What number is missing in the progression?';

const getProgression = (size, startValue, progressionValue) => {
  const arr = [startValue];
  for (let j = 1; j < size; j += 1) {
    arr.push(arr[j - 1] + progressionValue);
  }
  return arr;
};

const getCorrectAnswer = () => {
  const progressIndex = 5;
  const sizeOfArray = progressIndex + getRandomNum(0, 6);
  const missingElement = getRandomNum(0, sizeOfArray);
  const randomStart = getRandomNum(0, 100);
  const progressionMovement = getRandomNum(0, 100);

  const array = getProgression(sizeOfArray, randomStart, progressionMovement);

  const question = array[missingElement].toString();
  array[missingElement] = '..';
  const correctAnswer = array.join(' ');

  return [correctAnswer, question];
};
const brainProgression = () => {
  runGameFunction(description, getCorrectAnswer);
};
export default brainProgression;
