import { askName, welcomeUser, showRules, makeGame, getNum } from '..';

export default () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  showRules(rules);
  const name = askName();
  welcomeUser(name);
  const question = getNum();
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  const data = [question, correctAnswer, name];
  makeGame(data);
};
