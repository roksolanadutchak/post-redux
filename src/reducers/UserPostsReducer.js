import {
    GET_USER_POST_SUCCESS
} from "../actions/userPostsAction";
const initialState = {
    userPosts: []
}
export function UserPostsReducer(state = initialState, action){
    switch (action.type){
        case GET_USER_POST_SUCCESS: {
            return {
                ...state,
                userPosts: action.payload
            }
        }
        default: return state;
    }
}