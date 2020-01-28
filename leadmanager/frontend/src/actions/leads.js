import axios from "axios";

import { GET_USERS, DELETE_USER } from "./types";

// GET USERS
export const getUsers = () => dispatch => {
  axios
    .get("/api/registUser/")
    .then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// DELETE LEAD
export const deleteUser = id => dispatch => {
  axios
    .delete(`/api/registUser/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_USER,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
