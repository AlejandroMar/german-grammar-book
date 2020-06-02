export const data = {
  answers: {
    'a-1': 'unter der Zeitung.',
    'a-2': 'am Fenster.',
    'a-3': 'über dem Kamin.',
    'a-4': 'im Korb.',
    'a-5': 'auf dem Schrank.',
    /* "a-6": "auf dem Schrank.",
    "a-7": "auf dem Schrank.",
    "a-8": "auf dem Schrank.",
    "a-9": "auf dem Schrank.", */
  },
  shuffledAnswers: [],

  questions: [
    {
      respondedCounter: 0,
      question: 'Das Foto liegt',
      answers: ['a-1', 'a-2', 'a-3', 'a-4', 'a-5'],
      responded: [],
      done: false,
    },
    {
      respondedCounter: 0,
      question: 'Der Schreibtish steht',
      answers: ['a-2'],
      done: false,
      responded: [],
    },
    {
      respondedCounter: 0,
      question: 'Das Bild hängt',
      answers: ['a-3', 'a-2'],
      done: false,
      responded: [],
    },
    {
      respondedCounter: 0,
      question: 'Die Katze liegt',
      answers: ['a-4', 'a-5'],
      done: false,
      responded: [],
    },
    {
      respondedCounter: 0,
      question: 'Der Koffer liegt',
      answers: ['a-4', 'a-3'],
      done: false,
      responded: [],
    },
  ],
};

export const old_data = [
  {
    content: {
      question: 'Das Foto liegt',
      answers: 'unter der Zeitung.',
    },
    done: false,
  },
  {
    content: {
      question: 'Der Schreibtish steht',
      answer: 'am Fenster.',
    },
    done: false,
  },
  {
    content: {
      question: 'Das Bild hängt,',
      answer: 'über dem Kamin',
    },
    done: false,
  },
  {
    content: {
      question: 'Die Katze liegt',
      answer: 'im Korb.',
    },
    done: false,
  },
  {
    content: {
      question: 'Der Koffer liegt',
      answer: 'auf dem Schrank.',
    },
    done: false,
  },
];
