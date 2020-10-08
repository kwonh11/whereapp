import { combineReducers } from "redux";
import user from "./user";
import location from "./location";
import home from "./home";
import place from "./place";
import detail from "./detail";

const rootReducer = combineReducers({ user, location, home, place, detail });

export default rootReducer;
