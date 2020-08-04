import React from 'react'
import WassPast from '../../packages/gatsby-theme-language-book/exercise-builders/was-passt/index'

export const data = {
  answers: {
    'a-1': 'corriendo',
    'a-2': 'sentado',
    'a-3': 'en su casita',
    'a-4': 'leer un libro',
    'a-5': 'ver una película',
    'a-6': 'perdido',
    'a-7': 'dañado',
  },
  shuffledAnswers: [],

  questions: [
    {
      respondedCounter: 0,
      question: 'El perro está.',
      answers: ['a-1', 'a-2', 'a-3', 'a-6'],
      responded: [],
      done: false,
    },
    {
      respondedCounter: 0,
      question: 'Clara quiere.',
      answers: ['a-4', 'a-5'],
      done: false,
      responded: [],
    },
    {
      respondedCounter: 0,
      question: 'el computador está.',
      answers: ['a-6', 'a-7'],
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
