import { createStore } from 'redux';

// initial state

const initialState = {username: "", password: "", details:{}}

// Action Types

const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';

// Action Creators

export const getUser = ()=>{
  return { type: GET_USER }
}

export const setUser = (username, password, details)=>{
  const user = {username, password, details}
  return { type: SET_USER, user }
}

export const logOut = ()=>{
  return { type: LOG_OUT}
}

// Reducer

const reducer = (state=initialState, action) => {
  switch (action.type) {

    case GET_USER:
      return state;

    case SET_USER:
      return Object.assign({}, state, action.user)

    case LOG_OUT:
      return initialState;

    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;