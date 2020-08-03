import React from 'react'
import ScrableSentence from 'gatsby-theme-language-book/exercise-builders/scramble-sentence'

const phraseData = {
  phrase: {
    'part-1': { id: 'part-1', content: 'die Frauen' },
    'part-2': { id: 'part-2', content: 'trinken' },
    'part-3': { id: 'part-3', content: 'in der Bar am Marktplatz' },
    'part-4': { id: 'part-4', content: 'einen Cocktail' },
  },

  initialPhraseOrder: ['part-2', 'part-3', 'part-1', 'part-4'],

  answers: {
    'answer-1': {
      id: 'answer-1',
      pattern: ['part-1', 'part-2', 'part-3', 'part-4'],
      done: false,
    },
    'answer-2': {
      id: 'answer-2',
      pattern: ['part-3', 'part-2', 'part-1', 'part-4'],
      done: false,
    },
    'answer-3': {
      id: 'answer-3',
      pattern: ['part-4', 'part-2', 'part-1', 'part-3'],
      done: false,
    },
  },
}

const Scramble = () => {
  return <ScrableSentence phraseData={phraseData} />
}

export default Scramble
