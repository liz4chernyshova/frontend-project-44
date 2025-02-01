#!/usr/bin/env node

import { startGameRounds } from '../src/index.js';

const brainPrimeGame = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const primeNumber = (number) => {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  const gameLogic = () => {
    const num = Math.floor(Math.random() * 100) + 1;

    const question = `${num}`;
    const correctAnswer = primeNumber(num) ? 'yes' : 'no';

    return { question, correctAnswer };
  };

  startGameRounds(gameLogic, name);
};

export default brainPrimeGame;
