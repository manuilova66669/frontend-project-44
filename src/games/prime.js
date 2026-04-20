import runEngine from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  // Исправлено: добавлены точки с запятой в условии цикла
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getRoundData = () => {
  const questionText = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(questionText) ? 'yes' : 'no';
  return [String(questionText), correctAnswer];
};

export default () => runEngine(description, getRoundData);
