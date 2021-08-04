export const GET_POST = "GET_POST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const ADD_POST = "ADD_POST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const DELETE_POST = "DELETE_POST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const UPDATE_POST = "UPDATE_POST";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";

export function getPost(postId){
    return {
        type: GET_POST,
        payload: postId
    }
}
export function getPostSuccess(data){
    return {
        type: GET_POST_SUCCESS,
        payload: data
    }
}
export function addPost(data){
    return {
       type: ADD_POST, payload: data
    }
}
export function addPostSuccess(post){
    return {
        type: ADD_POST_SUCCESS,
        payload: post
    }
}
export function deletePost(postId){
    return {
        type: DELETE_POST,
        payload: postId
    }
}
export function deletePostSuccess(post){
    return {
        type: DELETE_POST_SUCCESS,
        payload: post
    }
}
export const updatePost = values =>{
    console.log(values)
    return {
        type: UPDATE_POST,
        payload: values
    }
}
export function updatePostSuccess(data){
    return {
        type: UPDATE_POST_SUCCESS,
        payload: data
    }
}
