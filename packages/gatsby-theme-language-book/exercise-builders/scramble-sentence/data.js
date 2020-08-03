export const initialData = {
  parentPhrase: {
    id: 'parentPhrase',
    phrasePartIds: [],
    title: 'Main phrase',
    text: 'Completa todas las opciones',
  },

  //As many as there are answers
  //Model
  poolModel: {
    id: String, // same as name
    phrasePartIds: Array,
    title: String,
    text: String,
    isDroppable: Boolean,
    done: {
      correct: Boolean,
      answerId: String, // answers.answer
    },
  },
  // create them on componentDidMount
  pools: {},

  isDroppableIndex: 0,
  repeatedAnswerMsg: null,
  completedPhrases: 0,
  allCompleted: false,
};
