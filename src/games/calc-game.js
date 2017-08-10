import readlineSync from 'readline-sync';
import { askName, welcomeUser, showRules } from '..';

const rules = 'What is the result of the expression?';
showRules(rules);

const getNum = () => {
  const randomNum = Math.floor(Math.random() * (100 - 1)) + 1;
  return randomNum;
};

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  return randomOperator;
};

export default () => {
  const name = askName();
  welcomeUser(name);
  const iter = (counter) => {
    const randomNum1 = getNum();
    const randomNum2 = getNum();
    const operator = getOperator();
    const question = `${randomNum1} ${operator} ${randomNum2}`;
    let correctAnswer;
    switch (operator) {
      case '+':
        correctAnswer = randomNum1 + randomNum2;
        break;
      case '-':
        correctAnswer = randomNum1 - randomNum2;
        break;
      case '*':
        correctAnswer = randomNum1 * randomNum2;
        break;
      default: correctAnswer = 0;
    }
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (counter === 3 && userAnswer === String(correctAnswer)) {
      console.log('Correct!');
      console.log(`Congratulations, ${name}!`);
    } else if (counter < 3 && userAnswer === String(correctAnswer)) {
      console.log('Correct!');
      return iter(counter + 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
    return null;
  };
  return iter(1);
};
