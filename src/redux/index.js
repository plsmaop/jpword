import { combineReducers } from 'redux';
import userName from './userNameModule';
import question from './questionModule';

// Reducer
const appReducer = combineReducers({
  userName,
  question,
});

const rootReducer = (state, action) => {
  if (action.type === 'INIT_STATE') {
    console.log(action);
    state = undefined;
  }
  return appReducer(state, action);
};

// Action Creator
export const actions = {
  initState: () => ({ type: 'INIT_STATE' }),
};

export default rootReducer;
