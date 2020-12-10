// export const loginUser = (User) => {
//   return function (dispatch) {
//     fetch("/auth/login", {
//       method: "POST",
//       body: JSON.stringify(User),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) =>
//         res.json().then((data) => {
//           dispatch(setUser(data));
//         })
//       )
//       .catch((error) => {
//         return {
//           type: "error",
//           value: error,
//         };
//       });
//   };
// };

export const addUser = (User) => {
  return function (dispatch) {
    fetch("/auth/signup", {
      method: "POST",
      body: JSON.stringify(User),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res.json().then((data) => {
          dispatch(userAdded(data));
        })
      )

      .catch((error) => {
        return {
          type: "error",
          value: error,
        };
      });
  };
};

export const setUser = (userName) => {
  return {
    type: "USER",
    value: userName,
  };
};

export const setPassword = (userPassword) => {
  return {
    type: "PASSWORD",
    value: userPassword,
  };
};

export const userAdded = (data) => {
  return {
    type: "ADD_USER",
    value: data,
  };
};

export const logoutUser = (User) => {
  document.cookie = "loggedIn=false; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  setUser("");
  return {
    type: "LOGOUT",
    value: User,
  };
};

export const getUserFavorites = (User) => {
  return function (dispatch) {
    fetch(`favorites/${User.favorites}`, {
      method: "GET",
      headers: {
        authorization: `${User.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(favoritesLoaded(data));
      })

      .catch((error) => {
        return {
          type: "error",
          value: error,
        };
      });
  };
};

export const favoritesLoaded = (data) => {
  return {
    type: "LOADED_FAVORITES",
    value: data,
  };
};

export const addFav = (favorites) => {
  return {
    type: "ADD_FAVORITE",
    value: favorites,
  };
};
export const removeFav = (index) => {
  return {
    type: "REMOVE_FAVORITE",
    value: index,
  };
};
