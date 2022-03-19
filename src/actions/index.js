import axios from "axios"

export const fetchMovie = (movieName) => {
    return async function (dispatch) {
        // eslint-disable-next-line no-unused-vars
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${movieName}`)
            .then((response) => dispatch({ type: "SELECTED_MOVIE", payload: response.data }))
            .catch((error) => { return error })
    }
}
