import {GET_POST,
    GET_POST_SUCCESS,
    ADD_POST_SUCCESS,
    UPDATE_POST_SUCCESS} from "../actions/postActions";

const initialState = {
    post: {}
}
export function postReducer(state = initialState, action){
    switch(action.type){
        case GET_POST: {
            return {
                ...state,
                post: action.payload
            }
        }
        case GET_POST_SUCCESS: {
            return {
                ...state,
                post: action.payload
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