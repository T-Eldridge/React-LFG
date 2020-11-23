import { combineReducers } from "redux";

const user = (state = null) => state

const loggedIn = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN':
      return (state = action.value);
    default:
      return state;
  }
};

const games = (state = [], action) => {
  switch(action.type) {
    case 'GET_GAMES':
      return action.value
    case 'REMOVE_GAME':
      const games = [ ...state ]
      games.splice(action.value, 1)
      return games
    default:
      return state
  }
}


export default combineReducers({ loggedIn, user, games });