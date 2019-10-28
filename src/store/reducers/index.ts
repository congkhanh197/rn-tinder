import { combineReducers } from "redux";
import peopleInfoReducer from "./peopleInfoReducer";
import favoriteReducer from "./favoriteReducer";
export default combineReducers({ peopleInfoReducer, favoriteReducer });
