export const GET_POSTS = "GET_POSTS";
export const GET_POST = "GET_POST";
export const GET_POSTS_CANCELED = "GET_POSTS_CANCELED"
export function getPosts(data){
    return {
        type: GET_POSTS,
        payload: data
    }
}
export function getPostsCanceled(){
    return {
        type: GET_POSTS_CANCELED
    }
}