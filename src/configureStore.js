import {createStore, combineReducers, applyMiddleware} from "redux";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {addPostEpic, postsEpic} from "./epics/postsEpic";
import {postReducer} from "./reducers/postReducer";
export function configureStore(){
    const rootEpic = combineEpics(postsEpic, addPostEpic);
    const epicMiddleware = createEpicMiddleware();
    const rootReducer = combineReducers({
        app: postReducer
    });
    const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
    epicMiddleware.run(rootEpic);
    console.log(store.getState())
    return store;
}
