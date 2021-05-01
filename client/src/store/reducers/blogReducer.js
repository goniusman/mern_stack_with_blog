import * as types from '../actions/types';

const init = {
    allBlog: {},
    error: {}, 
    singleBlog: {},
    comments: {},
}

const blogReducer = (state=init, action) => {
    switch ( action.type ){
        case types.LOAD_BLOG : {
            return {
                ...state,
                allBlog: action.payload.blog
                // singleBlog: {},
                // error: {}
            }
           
        }
        case types.LOAD_SINGLE_BLOG : {
            return {
                ...state,
                // blog: {},
                singleBlog: action.payload.singleBlog
                // error: {}
            }
        }
        case types.LOAD_COMMENT : {
            return {
                ...state,
                // blog: {},
                comments: action.payload.comments
                // error: {}
            }
        }
        case types.CREATE_POST : {
            let allBlog = [...state]
            allBlog.unshift(action.payload.blog)
             return {
                ...state,
                allBlog: action.payload.blog
                // singleBlog: {},
                // error: {}
            }
        }
        case types.POST_ERROR : {

            return {
                ...state,
                // blog: action.payload.blog,
                // singleBlog: action.payload.singleBlog,
                error: action.payload.error
            }
        }

        default: return state
    }
}

export default blogReducer