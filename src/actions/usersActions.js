export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS ="GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";

export function getUsers(){
    return {
        type: GET_USERS
    }
}
export function getUsersSuccess(data){
    return {
        type: GET_USERS_SUCCESS,
        payload: data
    }
}