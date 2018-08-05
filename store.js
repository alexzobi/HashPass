import { createStore } from 'redux';


// Action Types

const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER';

// Action Creators

export const getUser = ()=>{
  return { type: GET_USER }
}

export const setUser = (user)=>{
  return { type: SET_USER, user }
}

// Reducer

const reducer = (state={}, action) => {
  switch (action.type) {

    case GET_USER:
      return state;

    case SET_USER:
      return Object.assign({}, state, action.user)

    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;