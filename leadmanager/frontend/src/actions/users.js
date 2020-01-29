import axios from "axios";
import { createMessage } from "./messages";

import { GET_USERS, DELETE_USER, ADD_USER, GET_ERRORS } from "./types";

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

// DELETE USER
export const deleteUser = id => dispatch => {
  axios
    .delete(`/api/registUser/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteUser: "Usuario Eliminado" }));
      dispatch({
        type: DELETE_USER,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD USER
export const addUser = user => dispatch => {
  axios
    .post("/api/registUser/", user)
    .then(res => {
      dispatch(createMessage({ addUser: "Usuario Agregado" }));
      dispatch({
        type: ADD_USER,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};
