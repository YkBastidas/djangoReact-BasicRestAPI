import { combineReducers } from "redux";
import users from "./users";
import roles from "./roles";
import errors from "./errors";

export default combineReducers({
  users,
  roles,
  errors
});
