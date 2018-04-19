import { combineReducers } from "redux";
import UsersReducer from "./users";
import UserReducer from "./user";

const rootReducer = combineReducers({
  users: UsersReducer,
  user: UserReducer
});

export default rootReducer;
