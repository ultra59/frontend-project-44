import getRandomNum from '../getRandomNum.js';
import runGameFunction from '../gameFunction.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getisPrimeNumbers = () => {
  const num = getRandomNum(2, 200);
  const question = `${num}`;

  const answerTrue = isPrime(num) ? 'yes' : 'no';

  return [question, answerTrue];
};

const brainPrime = () => {
  runGameFunction(description, getisPrimeNumbers);
};
export default brainPrime;
