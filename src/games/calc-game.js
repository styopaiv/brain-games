import makeGame from '..';
import getNum from '../utils';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getOperator = () => {
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  return randomOperator;
};

const getCalcAnswer = (a, b, operator) => {
  let answer;
  switch (operator) {
    case '+':
      answer = a + b;
      break;
    case '-':
      answer = a - b;
      break;
    case '*':
      answer = a * b;
      break;
    default: answer = 0;
  }
  answer = `${answer}`;
  return answer;
};

const calcGameData = () => {
  const randomNum1 = getNum();
  const randomNum2 = getNum();
  const operator = getOperator();
  const question = `${randomNum1} ${operator} ${randomNum2}`;
  const correctAnswer = getCalcAnswer(randomNum1, randomNum2, operator);

  return [question, correctAnswer];
};

export default () => makeGame(calcGameData, rules);
