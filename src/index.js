import { question } from 'readline-sync'

const roundsCount = 3

const runEngine = (description, getRoundData) => {
  console.log('Welcome to the Brain Games!')
  const name = question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(description)

  for (let i = 0 i < roundsCount i += 1) {
    const [questionText, correctAnswer] = getRoundData()
    console.log(`Question: ${questionText}`)
    const userAnswer = question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

export default runEngine
