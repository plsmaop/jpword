// Actions
export const types = {
  ADD_USER: 'ADD_USER',
  UPDATE_INPUT: 'UPDATE_INPUT',
  INIT_STATE: 'INIT_STATE',
};

const initialState = {
  name: '',
  redirect: false,
};

// Reducer
const userName = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ADD_USER:
      return Object.assign({}, state, {
        redirect: true,
      });
    case types.UPDATE_INPUT:
      return Object.assign({}, state, {
        name: action.name,
      });
    default:
      return state;
  }
};

// Action Creators
export const actions = {
  addUser: () => ({ type: types.ADD_USER }),
  handleUpdateInput: name => {
    return {
      type: types.UPDATE_INPUT,
      name,
    }
  },
};

export default userName;
