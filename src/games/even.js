import makeGame from '..';
import getRandomNum from '../utils';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const evenGameData = () => {
  const question = getRandomNum();
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => makeGame(evenGameData, rules);
