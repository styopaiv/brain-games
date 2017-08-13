import makeGame from '..';

const rules = 'Balance the given number.';

export const balanceGameNum = () => {
  const randomNum = Math.floor(Math.random() * (5000 - 1)) + 1;
  return randomNum;
};

const arrayFromNum = num =>
  `${num}`.split('').map(char => +char);

const balanceNum = (num) => {
  const arr = arrayFromNum(num);

  const iter = (acc) => {
    const min = acc[0];
    const max = acc[acc.length - 1];

    if (max - min <= 1) {
      return acc.join('');
    }
    acc[0] = max - 1;
    acc[acc.length - 1] = min + 1;
    return iter(acc.sort());
  };

  return iter(arr.sort());
};

const balanceGameData = () => {
  const question = balanceGameNum();
  const correctAnswer = balanceNum(question);

  return [question, correctAnswer];
};


export default () => makeGame(balanceGameData, rules);
