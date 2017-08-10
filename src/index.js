import readlineSync from 'readline-sync';

export const showRules = (rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules} \n`);
  return rules;
};

export const askName = () => readlineSync.question('May I ask your name? ');

export const welcomeUser = (name) => {
  console.log(`Hello, ${name}! \n`);
};
