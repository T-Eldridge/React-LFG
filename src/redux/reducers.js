import { combineReducers } from "redux";

const user = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.value;
    case "LOGOUT":
      return action.value;
    case "ADD_USER":
      return action.value;
    default:
      return state;
  }
}


const favorites = (state = [], action) => {
  switch(action.type) {
    case 'ADD_GAME':
      return action.value
    case 'REMOVE_GAME':
      const favorites = [ ...state ]
      favorites.splice(action.value, 1)
      return favorites
    default:
      return state
  }
}


export default combineReducers({user, favorites });