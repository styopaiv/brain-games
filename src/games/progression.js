import { getNum } from '../utils';
import makeGame from '..';

const rules = 'What number is missing in this progression?';

const interval = getNum();

const getRandomElem = () => {
  const num = Math.floor(Math.random() * (10 - 1)) + 1;
  return num;
};

const createProg = () => {
  const arr = [];
  const progStart = getNum();

  const iter = (acc, num) => {
    if (acc.length === 10) {
      return acc;
    }
    acc.push(num);
    return iter(acc, num + interval);
  };

  return iter(arr, progStart);
};

const progressionGameData = () => {
  const prog = createProg();
  const missingElem = getRandomElem();
  const correctAnswer = prog[missingElem];
  prog[missingElem] = '..';
  const question = prog.join(' ');

  return [question, `${correctAnswer}`];
};

export default () => makeGame(progressionGameData, rules);
