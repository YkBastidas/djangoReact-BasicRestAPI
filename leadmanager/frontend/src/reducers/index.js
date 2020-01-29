import { combineReducers } from "redux";
import users from "./users";
import roles from "./roles";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  users,
  roles,
  errors,
  messages
});
