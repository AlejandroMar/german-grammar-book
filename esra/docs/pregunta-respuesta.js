import React from 'react'
import WassPast from '../../packages/gatsby-theme-language-book/exercise-builders/was-passt/index'

export const data = {
  answers: {
    'a-1': 'No, no los he lavado.',
    'a-2': 'Vale, los corto.',
    'a-3': 'No, no tengo tiempo, ¿las pelas tú?',
    'a-4': 'Quiero invitar a fernanda',
  },
  shuffledAnswers: [],

  questions: [
    {
      respondedCounter: 0,
      question: '¿Has lavado los platos?',
      answers: ['a-1'],
      responded: [],
      done: false,
    },
    {
      respondedCounter: 0,
      question: '¿Cortas los pepinos?',
      answers: ['a-2'],
      done: false,
      responded: [],
    },
    {
      respondedCounter: 0,
      question: '¿Pelas la papas?',
      answers: ['a-3'],
      done: false,
      responded: [],
    },
    {
      respondedCounter: 0,
      question: '¿A quien quieres invitar?',
      answers: ['a-4'],
      done: false,
      responded: [],
    },
  ],
}

const MyComponent = () => {
  return (
    <div>
      <WassPast data={data} />
    </div>
  )
}

export default MyComponent
