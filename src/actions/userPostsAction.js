export const GET_USER_POST = "GET_USER_POST";
export const GET_USER_POST_SUCCESS = "GET_USER_POST_SUCCESS"

export function getUserPosts(data){
    return {
        type: GET_USER_POST,
        payload: data
    }
}
export function getUserPostsSuccess(data){
    console.log(data)
    return {
        type: GET_USER_POST_SUCCESS,
        payload: data
    }
}