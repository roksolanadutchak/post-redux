import {
    GET_POST_SUCCESS
} from "../actions/postActions";
const initialState = {
    data: []
}
export function postsListReducer(state = initialState, action){
    switch (action.type){
        case GET_POST_SUCCESS: {
            return {
                data: action.payload
            }
        }
        default: return state;
    }
}