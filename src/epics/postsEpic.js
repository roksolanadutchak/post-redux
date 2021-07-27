import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { mergeMap } from "rxjs";
import { ofType } from "redux-observable";
import {
    ADD_POST,
    addPostSuccess,
    GET_POSTS,
    getPostsSuccess
} from "../reducers/postActions";

export const postsEpic = action$ => action$.pipe(
    ofType(GET_POSTS),
    mergeMap((action) => ajax.getJSON('https://jsonplaceholder.typicode.com/posts').pipe(
        map(response => getPostsSuccess(response))
    ))
)
export const addPostEpic = action$ => action$.pipe(
    ofType(ADD_POST),
    mergeMap(action => ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: "POST",
        body: action.payload
    }).pipe(
        map(post => addPostSuccess(post))
    ))
)
