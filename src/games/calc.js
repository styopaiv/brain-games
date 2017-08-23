import makeGame from '..';
import getRandomNum from '../utils';

const rule = 'What is the result of the expression?';
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

  const question = `${a} ${operator} ${b}`;
  return [question, `${answer}`];
};

const calcGameData = () => {
  const num1 = getRandomNum(100);
  const num2 = getRandomNum(100);
  const operator = getOperator();
  const data = getCalcAnswer(num1, num2, operator);

  return data;
};

export default () => makeGame(calcGameData, rule);
