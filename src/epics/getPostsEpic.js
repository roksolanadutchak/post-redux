import { ajax } from 'rxjs/ajax';
import {map, takeUntil} from "rxjs";
import {mergeMap} from "rxjs";
import {ofType} from "redux-observable";
import {GET_POSTS, GET_POSTS_CANCELED, getPosts} from "../reducers/postActions";

export const getPostsEpic = (action$, state$) => action$.pipe(
    ofType(GET_POSTS),
    mergeMap((action) => ajax.getJSON('https://jsonplaceholder.typicode.com/posts').pipe(
        map(response => getPosts(response)),
        takeUntil(action$.pipe(
            ofType(GET_POSTS_CANCELED)
        ))
    ))
)
