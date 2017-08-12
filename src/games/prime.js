import { getNum } from '../utils';
import makeGame from '..';

const rules = 'Answer "yes" if number is prime otherwise answer "no".';

const isPrime = (n) => {
  let i = 2;

  while (n % i !== 0 && i <= n) {
    i += 1;
  }
  if (i !== n) {
    return false;
  }
  return true;
};

const primeGameData = () => {
  const question = getNum();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => makeGame(primeGameData, rules);
