import {
    GET_COMMENTS,
    GET_COMMENTS_SUCCESS
} from "../actions/commentsAction";
const initialState = {
    comments: [],
    error: null,
    loading: false
}
export function CommentsReducer(state = initialState, action){
    switch (action.type){
        case GET_COMMENTS: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_COMMENTS_SUCCESS: {
            console.log(action.payload)
            return {
                ...state,
                comments: action.payload,
                loading: false
            }
        }
        default: return state;
    }
}