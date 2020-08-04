import React from 'react'
import ScrableSentence from 'gatsby-theme-language-book/exercise-builders/scramble-sentence'

const phraseData = {
  phrase: {
    'part-1': { id: 'part-1', content: 'corre' },
    'part-2': { id: 'part-2', content: 'el' },
    'part-3': { id: 'part-3', content: 'rápido' },
    'part-4': { id: 'part-4', content: 'perro' },
    'part-5': { id: 'part-5', content: 'muy' },
  },

  initialPhraseOrder: ['part-1', 'part-2', 'part-3', 'part-4', 'part-5'],

  answers: {
    'answer-1': {
      id: 'answer-1',
      pattern: ['part-2', 'part-4', 'part-1', 'part-5', 'part-3'],
      done: false,
    },
    'answer-2': {
      id: 'answer-2',
      pattern: ['part-5', 'part-3', 'part-1', 'part-2', 'part-4'],
      done: false,
    },
    'answer-3': {
      id: 'answer-3',
      pattern: ['part-1', 'part-2', 'part-4', 'part-5', 'part-3'],
      done: false,
    },
  },
}

const PhraseScramble1 = () => {
  return <ScrableSentence phraseData={phraseData} />
}

export default PhraseScramble1
