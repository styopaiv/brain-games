import makeGame from '..';
import getRandomNum from '../utils';

const rule = 'Answer "yes" if number is prime otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  let divider = 2;

  while (divider <= num / 2) {
    if (num % divider === 0) {
      return false;
    }
    divider += 1;
  }

  return true;
};

const primeGameData = () => {
  const question = getRandomNum(100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => makeGame(primeGameData, rule);
