export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS ="GET_USERS_SUCCESS";

export function getUsers(){
    return {
        type: GET_USERS
    }
}
export function getUsersSuccess(data){
    console.log(data)
    return {
        type: GET_USERS_SUCCESS,
        payload: data
    }
}