import readlineSync from 'readline-sync';

const count = 3;

const gameFunction = (description, playFunction) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  let attemptsLeft = count;
  for (let i = 0; i < count; i += 1) {
    const [question, correctAnswer] = playFunction();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is the wrong answer ;(. Correct answer was ${correctAnswer}.`);
      attemptsLeft -= 1;
    }

    if (attemptsLeft === 0) {
      console.log(`Game over, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default gameFunction;
