import CH from '../data/15_ch';
import JP from '../data/15_jp';
import arrayShuffle from '../function/arrayShuffle';

const generateQuestions = () => {
  const isUsed = new Array(JP.length).fill(false);
  const jpWords = [];
  const ans = [];
  const options = [];
  while (jpWords.length < 10) {
    const jpIndex = (Math.random() * 101 | 0) % JP.length;
    if (isUsed[jpIndex]) continue;
    isUsed[jpIndex] = true;
    jpWords.push(JP[jpIndex]);
    ans.push(jpIndex + 1);

    const isOptionUsed = new Array(CH.length).fill(false);
    isOptionUsed[jpIndex] = true;
    const option = [];
    option.push([jpIndex + 1, CH[jpIndex]]);
    while (option.length < 5) {
      const opIndex = (Math.random() * 101 | 0) % CH.length;
      if (isOptionUsed[opIndex]) continue;
      isOptionUsed[opIndex] = true;
      option.push([opIndex + 1, CH[opIndex]]);
    }
    options.push(arrayShuffle(option));
  }
  return { jpWords, ans, options };
};

// Actions
export const types = {
  SELECT_CHAPTER: 'SELECT_CHAPTER',
  UNSELECT_CHAPTER: 'UNSELECT_CHAPTER',
  NEXT_QUESTION: 'NEXT_QUESTION',
  CHOOSE_ANS: 'CHOOSE_ANS',
  ADD_QUESTIONS: 'ADD_QUESTIONS',
  GENERATE_QUESTIONS: 'GENERATE_QUESTIONS',
  GET_SCORE: 'GET_SCORE',
};

const initialState = {
  selectedChapter: [],
  jpWords: [],
  ans: [],
  options: [],
  questions: [],
  currentQuestion: 0,
  chosenAns: new Array(11).fill(0),
  score: 0,
};

// Reducer
const question = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SELECT_CHAPTER:
      return Object.assign({}, state, {
        selectedChapter: state.selectedChapter.concat([action.chapter]),
      });
    case types.UNSELECT_CHAPTER:
      return Object.assign({}, state, {
        selectedChapter: state.selectedChapter.filter(chapter => chapter !== action.chapter),
      });
    case types.GENERATE_QUESTIONS: {
      const questions = generateQuestions();
      return Object.assign({}, state, {
        ...questions,
      });
    }
    case types.NEXT_QUESTION:
      return Object.assign({}, state, {
        currentQuestion: state.currentQuestion + 1,
      });
    case types.CHOOSE_ANS:
      return Object.assign({}, state, {
        chosenAns: state.chosenAns.map((content, i) =>
          i === action.numberOfQuestion ? action.numberOfAns : content),
      });
    case types.ADD_QUESTIONS:
      return Object.assign({}, state, {
        questions: action.questions,
      });
    case types.GET_SCORE: {
      let score = 0;
      for (let i = 0; i < state.ans.length; i += 1) {
        score += (state.ans[i] === state.chosenAns[i + 1] ? 10 : 0);
      }
      return Object.assign({}, state, {
        score: state.score + score,
      });
    }
    default:
      return state;
  }
};

export const actions = {
  selectChapter: chapter => (
    {
      type: types.SELECT_CHAPTER,
      chapter,
    }
  ),
  unselectChapter: chapter => (
    {
      type: types.UNSELECT_CHAPTER,
      chapter,
    }
  ),
  generateQuestions: () => ({ type: types.GENERATE_QUESTIONS }),
  nextQuestion: () => ({ type: types.NEXT_QUESTION }),
  chooseAns: (numberOfQuestion, numberOfAns) => ({
    type: types.CHOOSE_ANS,
    numberOfQuestion,
    numberOfAns,
  }),
  addQuestions: questions => ({
    type: types.ADD_QUESTIONS,
    questions,
  }),
  getScore: () => ({ type: types.GET_SCORE }),
};

export default question;
