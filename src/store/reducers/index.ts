import { combineReducers } from "redux";
import peopleInfoReducer, {IPeopleResponse} from "./peopleInfoReducer";
import favoriteReducer from "./favoriteReducer";
export default combineReducers({ peopleInfoReducer, favoriteReducer });
