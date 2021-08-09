import {
    GET_POST,
    GET_POST_SUCCESS,
    ADD_POST_SUCCESS,
    UPDATE_POST_SUCCESS, GET_POST_ERROR
} from "../actions/postActions";

const initialState = {
    post: {},
    error: null,
    loading: false
}
export function postReducer(state = initialState, action){
    switch(action.type){
        case GET_POST: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_POST_SUCCESS: {
            return {
                ...state,
                post: action.payload,
                loading: false
            }
        }
        case GET_POST_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case ADD_POST_SUCCESS: {
            return {
                ...state,
                post: action.payload
            }
        }
        case UPDATE_POST_SUCCESS: {
            return {
                ...state,
                post: action.payload
            }
        }
        default: return state;
    }

}