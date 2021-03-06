import * as types from "../actions/types";

const init = {
  allBlog: [],
  error: {},
  singleBlog: {},
  comments: [],
  categories: [],
};

const blogReducer = (state = init, action) => {
  switch (action.type) {
    case types.LOAD_BLOG: {
      return {
        ...state,
        allBlog: action.payload.blog,
        // singleBlog: {},
        // error: {}
      };
    }
    case types.LOAD_CATEGORY: {
      return {
        ...state,
        categories: action.payload.category,
        // singleBlog: {},
        // error: {}
      };
    }
    case types.LOAD_SINGLE_BLOG: {
      return {
        ...state,
        // blog: {},
        singleBlog: action.payload.singleBlog,
        // error: {}
      };
    }
    case types._ERROR: {
      return {
        ...state,
        // blog: {},
        error: action.payload.error,
        // error: {}
      };
    }
    case types.LOAD_COMMENT: {
      return {
        ...state,
        comments: action.payload.comments,
      };
    }
    case types.CREATE_COMMENT: {
      let comments = [...state.comments];
      comments.push(action.payload.comment);
      return {
        ...state,
        comments,
      };
    }
    case types.COMMENT_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case types.CREATE_POST: {
      let allBlog = [...state.allBlog];
      allBlog.push(action.payload.blog);
      return {
        ...state,
        error:{},
        allBlog,
      };
    }
    case types.POST_ERROR: {
      return {
        ...state,
        // blog: action.payload.blog,
        // singleBlog: action.payload.singleBlog,
        error: action.payload.error,
      };
    }
    case types.SUCCESS_MESSAGE: {
      let allBlog = [...state.allBlog];
      let t = allBlog.filter((blog) => {
        return blog._id !== action.payload.id;
      });
      return {
        ...state,
        allBlog: t,
      };
    }
    default:
      return state;
  }
};

export default blogReducer;
