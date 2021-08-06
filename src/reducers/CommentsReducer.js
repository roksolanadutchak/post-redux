import {
    GET_COMMENTS_SUCCESS,
} from "../actions/commentsAction";
const initialState = {
    comments: []
}
export function CommentsReducer(state = initialState, action){
    switch (action.type){
        case GET_COMMENTS_SUCCESS: {
            console.log(action.payload)
            return {
                ...state,
                comments: action.payload,
                error: null
            }
        }
        default: return state;
    }
}