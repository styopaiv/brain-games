import readlineSync from 'readline-sync';
import { askName, welcomeUser, showRules, getNum } from '..';

const rules = 'What is the result of the expression?';
showRules(rules);
const name = askName();
welcomeUser(name);

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  return randomOperator;
};

export default () => {
  const counterStart = 1;
  const iter = (counter) => {
    if (counter > 3) {
      return null;
    }
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
    correctAnswer = String(correctAnswer);
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
  return iter(counterStart);
};
