import { combineReducers } from "redux";
import user from "./user";
import location from "./location";
import home from "./home";
import place from "./place";
import detail from "./detail";
import chat from "./chat";

const rootReducer = combineReducers({
  user,
  location,
  home,
  place,
  detail,
  chat,
});

export default rootReducer;
