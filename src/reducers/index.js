import { combineReducers } from "redux";
import selectedMovie from "./selectedMovie";



export default combineReducers({
    movie: selectedMovie,
})