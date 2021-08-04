import {
    DELETE_POST_SUCCESS,
} from "../actions/postActions";
import {GET_POSTS_SUCCESS} from "../actions/postListActions";
const initialState = {
    data: []
}
export function postsListReducer(state = initialState, action){
    switch (action.type){
        case GET_POSTS_SUCCESS: {
            return {
                data: action.payload
            }
        }
        case DELETE_POST_SUCCESS: {
            return {
                ...state,
                data: state.data.filter((item, index) => index !== action.payload)
            }
        }
        default: return state;
    }

}