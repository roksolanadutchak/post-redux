import {
    DELETE_POST_SUCCESS,
} from "../actions/postActions";
import {GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS} from "../actions/postListActions";
const initialState = {
    data: [],
    loading: false,
    error: null
}
export function postsListReducer(state = initialState, action){
    switch (action.type){
        case GET_POSTS: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_POSTS_SUCCESS: {
            return {
                data: action.payload,
                loading: false
            }
        }
        case GET_POSTS_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case DELETE_POST_SUCCESS: {
            return {
                ...state,
                data: state.data.filter((item, index) => index !== action.payload)
            }
        }
        default: return state;
    }

}