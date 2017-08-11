import readlineSync from 'readline-sync';

export default (data, rules) => {
  const iterStart = 1;
  console.log('Welcome to the Brain Games!');
  console.log(`${rules} \n`);
  const name = readlineSync.question('May I ask your name? ');
  console.log(`Hello, ${name}! \n`);
  const iter = (counter) => {
    if (counter > 3) {
      console.log(`Congratulations, ${name}!`);
      return null;
    }
    const gameData = data();
    const question = gameData[0];
    const correctAnswer = gameData[1];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return iter(counter + 1);
    } else if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
    return null;
  };
  return iter(iterStart, data);
};
