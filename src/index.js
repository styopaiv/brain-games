import readlineSync from 'readline-sync';

export const askName = () => {
  const playerName = readlineSync.question('May I ask your name?');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};
