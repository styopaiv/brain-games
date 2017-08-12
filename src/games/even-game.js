import makeGame from '..';
import { getNum } from '../utils';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const evenGameData = () => {
  const question = getNum();
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => makeGame(evenGameData, rules);
