import CH from '../data/15_ch';
import JP from '../data/15_jp';
import arrayShuffle from '../function/arrayShuffle'

const generateQuestions = () => {
  let isUsed = new Array(JP.length).fill(false);
  const jpWords = [];
  const ans = [];
  const options = [];
  while (jpWords.length <= 10) {
    const jpIndex = (Math.random()*101|0) % JP.length;
    if(isUsed[jpIndex]) continue;
    isUsed[jpIndex] = true;
    jpWords.push(JP[jpIndex]);
    ans.push(jpIndex);

    let isOptionUsed = new Array(CH.length).fill(false);
    isOptionUsed[jpIndex] = true;
    const option = [];
    option.push([jpIndex, CH[jpIndex]]);
    while (option.length < 5) {
      const opIndex = (Math.random()*101|0) % CH.length;
      if(isOptionUsed[opIndex]) continue;
      isOptionUsed[opIndex] = true;
      option.push([opIndex, CH[opIndex]]);
    }
    options.push(arrayShuffle(option));
  }
  return { jpWords, ans, options };
}

// Actions
export const types = {
  SELECT_CHAPTER: 'SELECT_CHAPTER',
  UNSELECT_CHAPTER: 'UNSELECT_CHAPTER',
  GENERATE_QUESTIONS: 'GENERATE_QUESTIONS',
};

const initialState = {
  selectedChapter: [],
  jpWords: [],
  ans: [],
  options: [],
};

// Reducer
const range = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SELECT_CHAPTER:
      return Object.assign({}, state, {
        selectedChapter: state.selectedChapter.concat([action.chapter]),
      });
    case types.UNSELECT_CHAPTER:
      return Object.assign({}, state, {
        selectedChapter: state.selectedChapter.filter(chapter => chapter !== action.chapter),
      });
    case types.GENERATE_QUESTIONS:
      const questions = generateQuestions();
      return Object.assign({}, state, {
        ...questions,
      });
    default:
      return state;
  }
}

// Action Creators
export const actions = {
  selectChapter: chapter => (
    { 
      type: types.SELECT_CHAPTER,
      chapter,
    }
  ),
  unselectChapter: chapter => {
    return {
      type: types.UNSELECT_CHAPTER,
      chapter,
    }
  },
  generateQuestions: () => ({ type: types.GENERATE_QUESTIONS, }),
};

export default range;
