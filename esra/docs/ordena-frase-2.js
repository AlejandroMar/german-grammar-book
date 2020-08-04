import React from 'react'
import ScrableSentence from 'gatsby-theme-language-book/exercise-builders/scramble-sentence'

const phraseData = {
  phrase: {
    'part-1': { id: 'part-1', content: 'fuerte' },
    'part-2': { id: 'part-2', content: 'soy' },
    'part-3': { id: 'part-3', content: 'camilo' },
    'part-4': { id: 'part-4', content: 'que' },
    'part-5': { id: 'part-5', content: 'más' },
  },

  initialPhraseOrder: ['part-1', 'part-2', 'part-3', 'part-4', 'part-5'],

  answers: {
    'answer-1': {
      id: 'answer-1',
      pattern: ['part-2', 'part-5', 'part-1', 'part-4', 'part-3'],
      done: false,
    },
    'answer-2': {
      id: 'answer-2',
      pattern: ['part-4', 'part-3', 'part-2', 'part-5', 'part-1'],
      done: false,
    },
    'answer-3': {
      id: 'answer-3',
      pattern: ['part-5', 'part-1', 'part-4', 'part-3', 'part-2'],
      done: false,
    },
  },
}

const PhraseScramble2 = () => {
  return <ScrableSentence phraseData={phraseData} />
}

export default PhraseScramble2
