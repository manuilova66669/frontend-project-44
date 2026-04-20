import runEngine from '../index.js';

const description = 'What is the result of the expression?';

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;
  const operator = operators[Math.floor(Math.random() * operators.length)];

  const question = `${num1} ${operator} ${num2}`;
  let answer;

  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      break;
  }

  return [question, String(answer)];
}

export default () => runEngine(description, generateRound);
