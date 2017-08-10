import readlineSync from 'readline-sync';

export const askName = () => readlineSync.question('May I ask your name? ');

export const welcomeUser = (name) => {
  console.log(`Hello, ${name}! \n`);
};
