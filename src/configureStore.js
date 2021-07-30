import {createStore, combineReducers, applyMiddleware} from "redux";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {addPostEpic, deletePostEpic, postEpic, postsEpic, updatePostEpic} from "./epics/postsEpic";
import {postsListReducer} from "./reducers/PostsListReducer";
import {postReducer} from "./reducers/PostReducer";
import {UsersListReducer} from "./reducers/UsersListReducer";
import {getUsersEpic} from "./epics/usersEpic";
import {userPostsEpic} from "./epics/userPostsEpic";
import {UserPostsReducer} from "./reducers/UserPostsReducer";
export function configureStore(){
    const rootEpic = combineEpics(postsEpic, postEpic, addPostEpic, deletePostEpic, updatePostEpic,getUsersEpic, userPostsEpic);
    const epicMiddleware = createEpicMiddleware();
    const rootReducer = combineReducers({
        app: postsListReducer,
        post: postReducer,
        users: UsersListReducer,
        userPosts: UserPostsReducer
    });
    const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
    epicMiddleware.run(rootEpic);
    console.log(store.getState())
    return store;
}
