// Actions
export const types = {
  NEXT_QUESTION: 'NEXT_QUESTION',
  CHOOSE_ANS: 'CHOOSE_ANS',
  ADD_QUESTIONS: 'ADD_QUESTIONS',
};

const initialState = {
  questions: [],
  currentQuestion: 0,
  chosenAns: new Array(11).fill(0),
};

// Reducer
const practice = (state = initialState, action = {}) => {
  switch(action.type) {
    case types.NEXT_QUESTION:
      return Object.assign({}, state, {
        currentQuestion: state.currentQuestion + 1,
      });
    case types.CHOOSE_ANS:
      return Object.assign({}, state, {
        chosenAns: state.chosenAns.map(
          (content,i) => 
            i === action.numberOfQuestion ? action.numberOfAns : content
          )
      });
    case types.ADD_QUESTIONS:
      return Object.assign({}, state, {
        questions: action.questions,
      });
    default:
      return state;
  }
};

// Action Creators
export const actions = {
  nextQuestion: () => ({ type: types.NEXT_QUESTION }),
  chooseAns: (numberOfQuestion, numberOfAns) => ({
    type: types.CHOOSE_ANS,
    numberOfQuestion,
    numberOfAns,
  }),
  addQuestions: (questions) => ({
    type: types.ADD_QUESTIONS,
    questions,
  }),
};

export default practice;
