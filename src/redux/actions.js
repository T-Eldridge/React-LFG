export const getGames = (games) => {
    return async (dispatch) => {
        fetch(
            `https://api.rawg.io/api/games`
        )
        .then((res) => res.json())
        .then((response) => {
            games = response.results.name;
            const action = {
                type: "GET_GAMES",
                value: games,
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