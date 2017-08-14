#!/usr/bin/env node

import readlineSync from 'readline-sync';
import startEvenGame from '../games/even';
import startCalcGame from '../games/calc';
import startGcdGame from '../games/gcd';
import startProgressionGame from '../games/progression';
import startBalanceGame from '../games/balance';
import startPrimeGame from '../games/prime';

console.log('Games list:');

const menu = ['Is number even?', 'Calculate', 'Greatest common diviser', 'Missing number', 'Balance number', 'Is number prime?'];

const index = readlineSync.keyInSelect(menu, 'Type in number of the game');

const startChosenGame = (game) => {
  switch (menu[game]) {
    case 'Is number even?':
      startEvenGame();
      break;
    case 'Calculate':
      startCalcGame();
      break;
    case 'Greatest common diviser':
      startGcdGame();
      break;
    case 'Missing number':
      startProgressionGame();
      break;
    case 'Balance number':
      startBalanceGame();
      break;
    case 'Is number prime?':
      startPrimeGame();
      break;
    default:
      console.log('Come back again!');
  }
};

const openMenu = () => startChosenGame(index);

openMenu();
// export default initializeMenu;
