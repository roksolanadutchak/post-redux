import {
    GET_POSTS,
    GET_POST,
    GET_POSTS_SUCCESS,
    GET_POST_SUCCESS,
    ADD_POST_SUCCESS,
    DELETE_POST_SUCCESS,
    UPDATE_POST_SUCCESS
} from "./postActions";
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
        case GET_POST_SUCCESS: {
            return {
                data: action.payload
            }
        }
        case ADD_POST_SUCCESS: {
            return {
                ...state,
                data: action.payload
            }
        }
        case DELETE_POST_SUCCESS: {
            return {
                ...state,
                data: state.data.filter((item, index) => index !== action.payload)
            }
        }
        case UPDATE_POST_SUCCESS: {
            console.log(state)
            return {
                ...state,
                data: action.payload
            }
        }
        default: return state;
    }
}