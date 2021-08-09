import { ajax } from 'rxjs/ajax';
import {catchError, map} from 'rxjs/operators';
import { mergeMap, of } from "rxjs";
import { ofType } from "redux-observable";
import {
    ADD_POST,
    addPostSuccess, DELETE_POST, deletePostSuccess, GET_POST, GET_POST_ERROR,
    getPostSuccess, UPDATE_POST, updatePostSuccess
} from "../actions/postActions";
import {GET_POSTS, GET_POSTS_ERROR, getPostsSuccess} from "../actions/postListActions";

export const postsEpic = action$ => action$.pipe(
    ofType(GET_POSTS),
    mergeMap((action) => ajax.getJSON('https://jsonplaceholder.typicode.com/posts').pipe(
        map(response => getPostsSuccess(response)),
        catchError(error => of({
            type: GET_POSTS_ERROR,
            payload:  error
        }))
    ))
)
export const postEpic = action$ => action$.pipe(
    ofType(GET_POST),
    mergeMap((action) => ajax.getJSON(`https://jsonplaceholder.typicode.com/posts/${action.payload}`).pipe(
        map(response => getPostSuccess(response)),
        catchError(error => of({
            type: GET_POST_ERROR,
            payload: error
        }))
    ))
)
export const addPostEpic = action$ => action$.pipe(
    ofType(ADD_POST),
    mergeMap(action => ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: "POST",
        body: action.payload
    }).pipe(
        map(post => addPostSuccess(post.response))
    ))
)
export const deletePostEpic = action$ => action$.pipe(
    ofType(DELETE_POST),
    mergeMap(action => ajax({
        url: `https://jsonplaceholder.typicode.com/posts/${action.payload}`,
        method: 'DELETE'
    }).pipe(
        map(id => deletePostSuccess(id))
    ))
)
export const updatePostEpic = action$ => action$.pipe(
    ofType(UPDATE_POST),
    mergeMap(action => ajax({
        url: `https://jsonplaceholder.typicode.com/posts/${action.payload.id}`,
        method: 'PUT',
        body: JSON.stringify({
            ...action.payload
        })
    }).pipe(map(json => updatePostSuccess(JSON.parse(json.request.body))))
    )
)
