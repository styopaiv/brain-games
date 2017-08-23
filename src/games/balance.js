import makeGame from '..';
import getRandomNum from '../utils';

const rule = 'Balance the given number.';

const arrayFromNum = num =>
  `${num}`.split('').map(char => +char);

const balanceNum = (num) => {
  const arr = arrayFromNum(num);

  const iter = (acc) => {
    const min = acc[0];
    const max = acc[acc.length - 1];

    if (max - min <= 1) {
      return acc.join('');
    }
    acc[0] = max - 1;
    acc[acc.length - 1] = min + 1;
    return iter(acc.sort());
  };

  return iter(arr.sort());
};

const balanceGameData = () => {
  const question = getRandomNum(5000);
  const correctAnswer = balanceNum(question);

  return [question, correctAnswer];
};


export default () => makeGame(balanceGameData, rule);
