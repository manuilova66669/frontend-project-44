import runEngine from '../index.js'

const description = 'Find the greatest common divisor of given numbers.'

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b))

const generateRound = () => {
  const num1 = Math.floor(Math.random() * 100) + 1
  const num2 = Math.floor(Math.random() * 100) + 1
  const question = `${num1} ${num2}`
  const answer = String(getGcd(num1, num2))
  return [question, answer]
}

export default () => runEngine(description, generateRound)
