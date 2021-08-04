export const GET_COMMENTS = "GET_COMMENTS";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const CLEAR_COMMENTS = "CLEAR_COMMENTS";

export function getComments(data){
    return {
        type: GET_COMMENTS,
        payload: data
    }
}
export function getCommentsSuccess(data){
    return {
        type: GET_COMMENTS_SUCCESS,
        payload: data
    }
}
export function clearComments(){
    return {
        type: CLEAR_COMMENTS
    }
}