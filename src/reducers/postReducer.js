import {GET_POSTS, GET_POST, GET_POSTS_CANCELED} from "./postActions";
const initialState = {
    data: []
}
export function postReducer(state = initialState, action){
    switch (action.type){
        case GET_POSTS: {
            console.log(action.payload)
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
        case GET_POSTS_CANCELED: {
            return {
                ...state
            }
        }
        default: return state;
    }
}