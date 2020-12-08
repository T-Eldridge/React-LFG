export const loginUser = (User) => {
    return function (dispatch) {
        fetch("/auth/login", {
            method: "POST",
            body: JSON.stringify(User),
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then((res) =>
        res.json().then((data) => {
            dispatch(userLoaded(data));
        }))
        .catch((error) => {
            return {
                type: "error",
                value: error,
            };
        });
    };
};

export  const addUser = (User) => {
    return function (dispatch) {
        fetch("/auth/signup", {
            method: "POST",
            body: JSON.stringify(User),
            headers: {
                "Content-Type": "application/json"
            },
        })
        
        .then((res) =>
        res.json().then((data) => {
            dispatch(userAdded(data));
        }))

        .catch((error) => {
            return {
                type: "error",
                value: error,
            };
        });

    };
}

export const userLoaded = (data) => {
    return {
        type: "LOGIN",
        value: data,
    };
};

export const userAdded = (data) => {
    return {
        type: "ADD_USER",
        value: data,
    };
};

export const getUserFavorites = (User) => {
    return function (dispatch) {
        fetch(`/favorites/${User.favorites}`, {
            method: "GET",
            headers: {
                "authorization": `${User.token}`,
                "Content-Type": "applicaton/json"
            }
        })
    }
}

export const removeEntry = (index) => {
    return {
        type: 'REMOVE_ENTRY',
        value: index,
    }
}

export const logoutUser = (User) => {
    document.cookie = "loggedIn=false; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    return {
        type: "LOGOUT",
        value: User, 
    };
};