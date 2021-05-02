import Axios from "axios";
import * as types from "./types";

export const loadBlog = () => (dispatchs) => {
  Axios.get("/api/post/")
    .then((res) => {
      dispatchs({
        type: types.LOAD_BLOG,
        payload: {
          blog: res.data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const SingleloadBlog = (id) => (dispatchs) => {
  Axios.get(`/api/post/${id}`)
    .then((res) => {
      dispatchs({
        type: types.LOAD_SINGLE_BLOG,
        payload: {
          singleBlog: res.data,
        },
      });
      // console.log(res)
    })
    .catch((err) => {
      console.log(err);
    });
};

export const LoadComment = (id) => (dispatch) => {
  Axios.get(`/api/post/single-post/${id}`)
    .then((res) => {
      dispatch({
        type: types.LOAD_COMMENT,
        payload: {
          comments: res.data,
        },
      });
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createPost = (posts) => (dispatch) => {
  Axios.post("/api/post/", posts)
    .then((res) => {
      dispatch({
        type: types.CREATE_POST,
        payload: {
          blog: res.data,
          error: {},
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: types.POST_ERROR,
        payload: {
          error: err.response.data,
        },
      });
      console.log(err.response.data);
    });
};

export const createComment = (posts) => (dispatch) => {
  Axios.post("/api/post/single-post/", posts)
    .then((res) => {
      dispatch({
        type: types.CREATE_COMMENT,
        payload: {
          comment: res.data,
          error: {},
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: types.COMMENT_ERROR,
        payload: {
          error: err.response.data,
        },
      });
    });
};
