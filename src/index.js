#!/usr/bin/env node

import readlineSync from 'readline-sync';

const runGame = (gameLogic) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  gameLogic(name);
};

const askQuestion = (question, correctAnswer, name) => {
  const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

  let isCorrect;

  if (typeof correctAnswer === 'number') {
    isCorrect = parseInt(userAnswer, 10) === correctAnswer;
  } else {
    isCorrect = userAnswer === correctAnswer;
  }

  if (!isCorrect) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }

  console.log('Correct!');
  return true;
};

const startGameRounds = (gameLogic, name) => {
  let round = 0;
  while (round < 3) {
    const { question, correctAnswer } = gameLogic();
    const isCorrect = askQuestion(question, correctAnswer, name);

    if (!isCorrect) {
      return;
    }

    round += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export { runGame, startGameRounds };
