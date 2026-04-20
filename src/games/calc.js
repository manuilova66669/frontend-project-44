import runEngine from '../index.js';

const description = 'What is the result of the expression?';

const getRoundData = () => {
  const num1 = Math.floor(Math.random() * 20);
  const num2 = Math.floor(Math.random() * 10);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${num1} ${operator} ${num2}`;
  let result;
  switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  default:
    break;
  }

  const correctAnswer = String(result);
  return [question, correctAnswer];
};

export default () => runEngine(description, getRoundData);
