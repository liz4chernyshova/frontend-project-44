#!/usr/bin/env node

import { startGameRounds } from '../src/index.js';

const brainProgressionGame = (name) => {
  console.log('What number is missing in the progression?');

  const gameLogic = () => {
    const length = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    const start = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 5) + 1;

    const progression = [];
    for (let i = 0; i < length; i += 1) {
      progression.push(start + i * step);
    }

    const missingIndex = Math.floor(Math.random() * length);
    const missingNumber = progression[missingIndex];

    progression[missingIndex] = '..';

    const question = progression.join(' ');

    return { question, correctAnswer: missingNumber };
  };

  startGameRounds(gameLogic, name);
};

export default brainProgressionGame;
