export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";

export function getPosts(){
    return {
        type: GET_POSTS
    }
}
export function getPostsSuccess(data){
    console.log(data)
    return {
        type: GET_POSTS_SUCCESS,
        payload: data
    }
}