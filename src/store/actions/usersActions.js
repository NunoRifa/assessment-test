import { GET_USERS, USERS_ERROR } from "../types";
import axios from "axios";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://api.github.com/users/NunoRifa/repos`);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e),
    });
  }
};
