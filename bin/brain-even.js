#!/usr/bin/env node

import readlineSync from 'readline-sync';
import welcomeUser from '../src/cli.js';

const name = welcomeUser();

// правило
console.log('Answer "yes" if the number is even, otherwise answer "no"');

// генерация числа
const randomNumber = Math.floor(Math.random() * 100);

// вывод вопроса
console.log(`Question: ${randomNumber}`);

// ввод ответа
const answer = readlineSync.question('Your answer: ');

// правильный ответ
const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

// проверка
if (answer === correctAnswer) {
  console.log('Correct!');
} else {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
}
