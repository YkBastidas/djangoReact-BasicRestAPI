import axios from "axios";

import { GET_ROLES } from "./types";

// GET ROLES
export const getRoles = () => dispatch => {
  axios
    .get("/api/userRole/")
    .then(res => {
      dispatch({
        type: GET_ROLES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
