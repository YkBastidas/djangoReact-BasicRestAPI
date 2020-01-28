import { GET_ROLES } from "../actions/types.js";

const initialState = {
  roles: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ROLES:
      return {
        ...state,
        roles: action.payload
      };
    default:
      return state;
  }
}
