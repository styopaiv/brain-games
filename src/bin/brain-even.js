#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { askName, welcomeUser } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');
const name = askName();

welcomeUser(name);

const askQuestion = () => {
  const iter = (counter) => {
    const randomNum = Math.floor(Math.random() * (100 - 1)) + 1;
    console.log(`Question: ${randomNum} `);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

    if (counter === 3) {
      console.log(`Congratulations, ${name}!`);
    } else if (userAnswer === correctAnswer) {
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

askQuestion();
