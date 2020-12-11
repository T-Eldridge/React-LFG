import { combineReducers } from "redux";

const userName = (state = "", action) => {
  switch (action.type) {
    case "USER":
      return action.value;
    case "LOGOUT":
      return action.value;
    default:
      return state;
  }
};

const userPassword = (state = "", action) => {
  switch (action.type) {
    case "PASSWORD":
      return action.value;
    default:
      return state;
  }
};

const favorites = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.value];
    case "REMOVE_FAVORITE":
      const favorites = [...state];
      favorites.splice(action.value, 1);
      return favorites;
    default:
      return state;
  }
};

const favGameObj = (state = {}, action) => {
  switch (action.type) {
    case "SET_FAV":
      return Object.assign({}, state, action.value);
    default:
      return state;
  }
};

export default combineReducers({
  favGameObj,
  userName,
  userPassword,
  favorites,
});
