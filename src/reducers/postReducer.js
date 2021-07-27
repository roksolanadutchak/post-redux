import {GET_POSTS, GET_POST, GET_POSTS_SUCCESS, ADD_POST_SUCCESS} from "./postActions";
const initialState = {
    data: []
}
export function postReducer(state = initialState, action){
    switch (action.type){
        case GET_POSTS: {
            console.log(action.payload)
            return {
                ...state
            }
        }
        case GET_POSTS_SUCCESS: {
            return {
                ...state,
                data: action.payload
            }
        }
        case GET_POST: {
            return {
                ...state
            }
        }
        case ADD_POST_SUCCESS: {
            return {
                ...state,
                data: action.payload
            }
        }
        default: return state;
    }
}