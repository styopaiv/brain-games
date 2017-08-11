import readlineSync from 'readline-sync';

export const showRules = (rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules} \n`);
  return rules;
};

export const askName = () => readlineSync.question('May I ask your name? ');

export const welcomeUser = (name) => {
  console.log(`Hello, ${name}! \n`);
};

export const getNum = () => {
  const randomNum = Math.floor(Math.random() * (100 - 1)) + 1;
  return randomNum;
};

export const makeGame = (data, rules) => {
  const iterStart = 1;
  showRules(rules);
  const name = askName();
  welcomeUser(name);
  const iter = (counter) => {
    if (counter > 3) {
      return null;
    }
    const gameData = data();
    const question = gameData[0];
    const correctAnswer = gameData[1];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (counter < 3 && userAnswer === correctAnswer) {
      console.log('Correct!');
      return iter(counter + 1);
    } else if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    } else {
      console.log('Correct!');
      console.log(`Congratulations, ${name}!`);
    }
    return null;
  };
  return iter(iterStart, data);
};
