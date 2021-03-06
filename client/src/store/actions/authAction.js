import Axios from "axios";
import jwtDecode from "jwt-decode";
import * as Types from "./types";
import setAuthToken from "../../utils/setAuthToken";

export const register = (user, history) => (dispatch) => {
  Axios.post("/api/users/register", user)
    .then((res) => {
      dispatch({
        type: Types.USERS_ERROR,
        payload: {
          error: {},
        },
      });
      history.push("/login");
    })
    .catch((error) => {
      dispatch({
        type: Types.USERS_ERROR,
        payload: {
          error: error.response.data,
        },
      });
    });
};

export const login = (user) => (dispatch) => {
  Axios.post("/api/users/login", user)
    .then((res) => {
      let token = res.data.token;
      localStorage.setItem("auth_token", token);
      setAuthToken(token);
      let decode = jwtDecode(token);

      dispatch({
        type: Types.SET_USER,
        payload: {
          user: decode,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: Types.USERS_ERROR,
        payload: {
          error: error.response.data,
        },
      });
    });
};

export const imageUpload = (id, formData) => (dispatch) => {
  Axios.put(`/api/users/upload/${id}`, formData)
    .then((res) => {
      dispatch({
        type: Types.UPLOAD_PROFILE_PIC,
        payload: {
          image: res.data,
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logout = (history) => {
  localStorage.removeItem("auth_token");
  return {
    type: Types.SET_USER,
    payload: {
      user: {},
    },
  };
};
