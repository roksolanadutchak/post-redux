import {createStore, combineReducers, applyMiddleware} from "redux";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {getPostsEpic} from "./epics/getPostsEpic";
import {postReducer} from "./reducers/postReducer";
export function configureStore(){
    const rootEpic = combineEpics(getPostsEpic);
    const epicMiddleware = createEpicMiddleware();
    const rootReducer = combineReducers({
        app: postReducer
    });
    const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
    epicMiddleware.run(rootEpic);
    console.log(store.getState())
    return store;
}
