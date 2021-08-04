import { ajax } from "rxjs/ajax";
import { map } from 'rxjs/operators';
import { mergeMap } from "rxjs";
import { ofType } from "redux-observable";
import {GET_COMMENTS, getCommentsSuccess} from "../actions/commentsAction";

export const commentsEpic = action$ => action$.pipe(
    ofType(GET_COMMENTS),
    mergeMap((action) => ajax.getJSON(`https://jsonplaceholder.typicode.com/posts/${action.payload}/comments`).pipe(
        map(response => getCommentsSuccess(response))
    ))
)