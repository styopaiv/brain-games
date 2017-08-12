import makeGame from '..';
import { balanceGameNum } from '../utils';

const rules = 'Balance the given number.';

const arrayFromNum = (num) => {
  const str = `${num}`;
  const strArray = str.split('');

  for (let i = 0; i <= strArray.length - 1; i += 1) {
    strArray[i] = +strArray[i];
  }

  return strArray;
};


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
  const question = balanceGameNum();
  const correctAnswer = balanceNum(question);

  return [question, correctAnswer];
};


export default () => makeGame(balanceGameData, rules);
