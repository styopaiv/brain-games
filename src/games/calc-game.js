import { getNum, makeGame } from '..';

const rules = 'What is the result of the expression?';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  return randomOperator;
};

const calcGameData = () => {
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
  return [question, correctAnswer];
};

export default () => {
  makeGame(calcGameData, rules);
};
