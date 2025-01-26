#!/usr/bin/env node

import { startGameRounds } from '../src/index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const isEven = (num) => num % 2 === 0;

const brainEvenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const gameLogic = () => {
    const number = getRandomNumber();
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    const question = `${number}`;
    return { question, correctAnswer };
  };

  startGameRounds(gameLogic, name);
};

export default brainEvenGame;
