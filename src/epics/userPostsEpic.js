import { ajax } from "rxjs/ajax";
import { map } from 'rxjs/operators';
import { mergeMap } from "rxjs";
import { ofType } from "redux-observable";
import {GET_USER_POST, getUserPostsSuccess} from "../actions/userPostsAction";

export const userPostsEpic = action$ => action$.pipe(
    ofType(GET_USER_POST),
    mergeMap((action) => ajax.getJSON(`https://jsonplaceholder.typicode.com/posts?userId=${action.payload}`).pipe(
        map(response => getUserPostsSuccess(response))
    ))
)