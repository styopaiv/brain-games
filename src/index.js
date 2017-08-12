import readlineSync from 'readline-sync';

const gameMoves = 3;

export default (data, rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules} \n`);
  const name = readlineSync.question('May I ask your name? ');
  console.log(`Hello, ${name}! \n`);

  const iter = (acc) => {
    if (acc > gameMoves) {
      console.log(`Congratulations, ${name}!`);
      return acc;
    }

    const gameData = data();
    const question = gameData[0];
    const correctAnswer = gameData[1];

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return iter(acc + 1);
    } else if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
    return acc;
  };

  return iter(1, data);
};
