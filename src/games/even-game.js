import readlineSync from 'readline-sync';
import { askName, welcomeUser, showRules } from '..';

export const startIntroduction = () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  showRules(rules);
};

export default () => {
  startIntroduction();
  const name = askName();
  welcomeUser(name);
  const iter = (counter) => {
    const randomNum = Math.floor(Math.random() * (100 - 1)) + 1;
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNum} `);
    const userAnswer = readlineSync.question('Your answer: ');
    if (counter === 3 && userAnswer === correctAnswer) {
      console.log('Correct!');
      console.log(`Congratulations, ${name}!`);
    } else if (counter < 3 && userAnswer === correctAnswer) {
      console.log('Correct!');
      return iter(counter + 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
    return null;
  };
  return iter(1);
};
