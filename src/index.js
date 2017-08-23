import readlineSync from 'readline-sync';

const gameMoves = 3;

const runGame = (counter, data) => {
  if (counter < 1) {
    return true;
  }

  const gameData = data();
  const [question, correctAnswer] = gameData;

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return runGame(counter - 1, data);
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export default (data, rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}\n`);
  const name = readlineSync.question('May I ask your name? ');
  console.log(`Hello, ${name}!\n`);

  const result = runGame(gameMoves, data);

  if (result) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
