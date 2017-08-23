import makeGame from '..';
import getRandomNum from '../utils';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const evenGameData = () => {
  const question = getRandomNum(100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => makeGame(evenGameData, rule);
