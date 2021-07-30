import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { mergeMap } from "rxjs";
import { ofType } from "redux-observable";
import {
    GET_USERS, getUsersSuccess
} from "../actions/usersActions";

export const getUsersEpic = action$ => action$.pipe(
    ofType(GET_USERS),
    mergeMap((action) =>ajax.getJSON('https://jsonplaceholder.typicode.com/users').pipe(
     map(response => getUsersSuccess(response))
    ))
)
