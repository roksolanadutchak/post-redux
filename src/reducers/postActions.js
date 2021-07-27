export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POST_SUCCESS"
export const GET_POST = "GET_POST";
export const ADD_POST = "ADD_POST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
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
export function addPost(data){
    console.log(data)
    return {
       type: ADD_POST, payload: data
    }
}
export function addPostSuccess(post){
    console.log(post)
    return {
        type: GET_POSTS_SUCCESS,
        payload: post
    }
}