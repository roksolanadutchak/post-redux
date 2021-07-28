import {createStore, combineReducers, applyMiddleware} from "redux";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {addPostEpic, deletePostEpic, postEpic, postsEpic, updatePostEpic} from "./epics/postsEpic";
import {postReducer} from "./reducers/postReducer";
export function configureStore(){
    const rootEpic = combineEpics(postsEpic, postEpic, addPostEpic, deletePostEpic, updatePostEpic);
    const epicMiddleware = createEpicMiddleware();
    const rootReducer = combineReducers({
        app: postReducer
    });
    const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
    epicMiddleware.run(rootEpic);
    console.log(store.getState())
    return store;
}
