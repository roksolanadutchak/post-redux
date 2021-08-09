import {
    GET_USERS, GET_USERS_ERROR,
    GET_USERS_SUCCESS
} from "../actions/usersActions";
const initialState = {
    users: [],
    loading: false,
    error: null
}
export function UsersListReducer(state = initialState, action){
    switch (action.type){
        case GET_USERS: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        }
        case GET_USERS_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default: return state;
    }
}