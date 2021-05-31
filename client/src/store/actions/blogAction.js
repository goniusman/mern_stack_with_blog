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

export const loadCategory = () => (dispatchs) => {
  Axios.get("/api/category/")
    .then((res) => {
      dispatchs({
        type: types.LOAD_CATEGORY,
        payload: {
          category: res.data,
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
      try {
        dispatchs({
          type: types.LOAD_SINGLE_BLOG,
          payload: {
            singleBlog: res.data,
            error: {},
          },
        });
      } catch (error) {
        console.log(error);
      }
    })
    .catch((err) => {
      dispatchs({
        type: types._ERROR,
        payload: {
          error: err.response.data,
        },
      });
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
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createComment = (posts) => (dispatch) => {
  Axios.post("/api/post/single-post/", posts)
    .then((res) => {
      try {
        dispatch({
          type: types.CREATE_COMMENT,
          payload: {
            comment: res.data,
            error: {},
          },
        });
      } catch (error) {
        console.log(res, error);
      }
    })
    .catch((err) => {
      dispatch({
        type: types.COMMENT_ERROR,
        payload: {
          error: err.response.data,
        },
      });
      console.log(err);
    });
};

export const createPost = (posts) => (dispatch) => {
  Axios.post("/api/post/", posts)
    .then((res) => {
      try {
        dispatch({
          type: types.CREATE_POST,
          payload: {
            blog: res.data,
            error: {},
          },
        });
      } catch (error) {
        console.log(res, error);
      }
    })
    .catch((err) => {
      dispatch({
        type: types.POST_ERROR,
        payload: {
          error: err.response.data,
        },
      });
    });
};

export const editPost = (posts, postId) => (dispatch) => {
  Axios.put(`/api/post/${postId}`, posts)
    .then((res) => {
      try {
        dispatch({
          type: types.EDIT_POST,
          payload: {
            blog: res.data,
            error: {},
          },
        });
      } catch (error) {
        console.log(res, error);
      }
    })
    .catch((err) => {
      dispatch({
        type: types.POST_ERROR,
        payload: {
          error: err.response.data,
        },
      });
    });
};

export const toggleLike = (postId) => (dispatch) => {
  Axios.put(`/api/post/toggle/${postId}`)
    .then((res) => {
      try {
        dispatch({
          type: types.EDIT_POST,
          payload: {
            blog: res.data,
            error: {},
          },
        });
      } catch (error) {
        console.log(res, error);
      }
    })
    .catch((err) => {
      dispatch({
        type: types.POST_ERROR,
        payload: {
          error: err.response.data,
        },
      });
    });
};

export const toggleDislike = (postId) => (dispatch) => {
  Axios.put(`/api/post/toggle/${postId}`)
    .then((res) => {
      try {
        dispatch({
          type: types.EDIT_POST,
          payload: {
            blog: res.data,
            error: {},
          },
        });
      } catch (error) {
        console.log(res, error);
      }
    })
    .catch((err) => {
      dispatch({
        type: types.POST_ERROR,
        payload: {
          error: err.response.data,
        },
      });
    });
};

export const deletePost = (id) => (dispatch) => {
  Axios.delete(`/api/post/${id}`)
    .then((res) => {
      dispatch({
        type: types.SUCCESS_MESSAGE,
        payload: { id: res.data._id },
      });
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
