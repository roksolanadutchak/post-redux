export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_ERROR = "GET_POSTS_ERROR";

export function getPosts(){
    return {
        type: GET_POSTS
    }
}
export function getPostsSuccess(data){
    return {
        type: GET_POSTS_SUCCESS,
        payload: data
    }
}