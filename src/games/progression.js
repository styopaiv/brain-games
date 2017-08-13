import makeGame from '..';
import getRandomNum from '../utils';

const rule = 'What number is missing in this progression?';
const interval = getRandomNum();

const getRandomElem = () => {
  const num = Math.floor(Math.random() * (10 - 1)) + 1;
  return num;
};

const createProg = () => {
  const arr = [];
  const progStart = getRandomNum();

  const iter = (acc, num) => {
    if (acc.length === 10) {
      return acc;
    }
    return iter(acc.concat(num), num + interval);
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

export default () => makeGame(progressionGameData, rule);
