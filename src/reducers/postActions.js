export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POST = "GET_POST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const ADD_POST = "ADD_POST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const DELETE_POST = "DELETE_POST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const UPDATE_POST = "UPDATE_POST";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
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
export function getPost(postId){
    return {
        type: GET_POST,
        payload: postId
    }
}
export function getPostSuccess(data){
    console.log(data)
    return {
        type: GET_POST_SUCCESS,
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
export function deletePost(postId){
    console.log(postId)
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
    console.log(data)
    return {
        type: UPDATE_POST_SUCCESS,
        payload: data
    }
}
