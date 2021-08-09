import {
    GET_USER_POST, GET_USER_POST_ERROR,
    GET_USER_POST_SUCCESS
} from "../actions/userPostsAction";
const initialState = {
    userPosts: [],
    error: null,
    loading: false
}
export function UserPostsReducer(state = initialState, action){
    switch (action.type){
        case GET_USER_POST: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_USER_POST_SUCCESS: {
            return {
                ...state,
                userPosts: action.payload,
                loading: false
            }
        }
        default: return state;
    }
}