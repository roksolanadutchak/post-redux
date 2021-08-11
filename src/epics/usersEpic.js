import { ajax } from 'rxjs/ajax';
import {catchError, map} from 'rxjs/operators';
import { mergeMap, of } from "rxjs";
import { ofType } from "redux-observable";
import {
    GET_USERS, GET_USERS_ERROR, getUsersSuccess
} from "../actions/usersActions";

export const getUsersEpic = action$ => action$.pipe(
    ofType(GET_USERS),
    mergeMap((action) =>ajax.getJSON('https://jsonplaceholder.typicode.com/users').pipe(
     map(response => getUsersSuccess(response)),
        catchError(error => of({
            type: GET_USERS_ERROR,
            payload: error
        }))
    ))
)
