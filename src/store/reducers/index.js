import { combineReducers } from "redux";
import user from "./userReducer";
import album from "./albumReducer";
import photo from "./photoReducer";

export default combineReducers({
  user,
  album,
  photo,
});
