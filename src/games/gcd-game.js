import makeGame from '..';
import { getNum } from '../utils';

const rules = 'Find the greatest common divisor of given numbers.';

const calcGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calcGcd(b, a % b);
};

export const gcdGameData = () => {
  const randomNum1 = getNum();
  const randomNum2 = getNum();
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = `${calcGcd(randomNum1, randomNum2)}`;
  return [question, correctAnswer];
};

export default () => makeGame(gcdGameData, rules);
