const url = "https://api.rawg.io/api/games"

export const fetchGames = () => {
    return (dispatch) => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
                const action = {
                type: "GET_GAMES",
                value: data.results,
            };
            dispatch(action)
        })
    }
}



export const login = (bool) => {
    return {
        type: "LOGIN",
        value: bool,
    }
}

export  const setUser = (username) => {
    return {
        type: "SET_USER",
        value: username,
    }
}

export const removeEntry = (index) => {
    return {
        type: 'REMOVE_ENTRY',
        value: index,
    }
}