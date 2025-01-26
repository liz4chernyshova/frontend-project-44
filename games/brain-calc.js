#!/usr/bin/env node

import { startGameRounds } from '../src/index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const operations = ['+', '-', '*'];

const brainCalcGame = (name) => {
  console.log('What is the result of the expression?');

  const gameLogic = () => {
    const num1 = getRandomInt(1, 20);
    const num2 = getRandomInt(1, 20);
    const operation = operations[getRandomInt(0, operations.length - 1)];
    const question = `${num1} ${operation} ${num2}`;

    let correctAnswer;
    if (operation === '+') correctAnswer = num1 + num2;
    if (operation === '-') correctAnswer = num1 - num2;
    if (operation === '*') correctAnswer = num1 * num2;

    return { question, correctAnswer };
  };

  startGameRounds(gameLogic, name);
};

export default brainCalcGame;
