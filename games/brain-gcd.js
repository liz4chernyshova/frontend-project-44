#!/usr/bin/env node

import { startGameRounds } from '../src/index.js';

const brainGcdGame = (name) => {
  console.log('Find the greatest common divisor of given numbers.');

  const gcd = (a, b) => {
    let currentA = a;
    let currentB = b;
    while (currentB !== 0) {
      const current = currentB;
      currentB = currentA % currentB;
      currentA = current;
    }
    return currentA;
  };

  const gameLogic = () => {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;

    const question = `${num1} ${num2}`;
    const correctAnswer = gcd(num1, num2);

    return { question, correctAnswer };
  };

  startGameRounds(gameLogic, name);
};

export default brainGcdGame;
