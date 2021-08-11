export const GET_USER_POST = "GET_USER_POST";
export const GET_USER_POST_SUCCESS = "GET_USER_POST_SUCCESS"
export const CLEAR_USER_POST = "CLEAR_USER_POST"

export function getUserPosts(data){
    return {
        type: GET_USER_POST,
        payload: data
    }
}
export function getUserPostsSuccess(data){
    return {
        type: GET_USER_POST_SUCCESS,
        payload: data
    }
}
export function clearUserPosts(){
    return {
        type: CLEAR_USER_POST
    }
}