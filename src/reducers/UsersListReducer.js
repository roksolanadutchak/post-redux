import {
    GET_USERS_SUCCESS
} from "../actions/usersActions";
const initialState = {
    users: []
}
export function UsersListReducer(state = initialState, action){
    switch (action.type){
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                users: action.payload
            }
        }
        default: return state;
    }
}