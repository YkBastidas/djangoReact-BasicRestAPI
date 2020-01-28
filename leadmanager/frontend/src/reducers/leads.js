import { GET_USERS, DELETE_USER } from "../actions/types.js";

const initialState = {
  something: "text",
  users: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.user_id !== action.payload)
      };
    default:
      return state;
  }
}
