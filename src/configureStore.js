import {createStore, combineReducers, applyMiddleware} from "redux";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {addPostEpic, deletePostEpic, postEpic, postsEpic, updatePostEpic} from "./epics/postsEpic";
import {postsListReducer} from "./reducers/PostsListReducer";
import {postReducer} from "./reducers/PostReducer";
import {UsersListReducer} from "./reducers/UsersListReducer";
import {getUsersEpic} from "./epics/usersEpic";
import {userPostsEpic} from "./epics/userPostsEpic";
import {UserPostsReducer} from "./reducers/UserPostsReducer";
import {CommentsReducer} from "./reducers/CommentsReducer";
import {commentsEpic} from "./epics/commentsEpic";
import {CLEAR_USER_POST} from "./actions/userPostsAction";
import {CLEAR_COMMENTS} from "./actions/commentsAction";

export function configureStore(){
    const rootEpic = combineEpics(postsEpic, postEpic, addPostEpic, deletePostEpic, updatePostEpic,getUsersEpic, userPostsEpic, commentsEpic)
    const epicMiddleware = createEpicMiddleware();
    const rootReducer = combineReducers({
        app: postsListReducer,
        post: postReducer,
        users: UsersListReducer,
        userPosts: UserPostsReducer,
        comments: CommentsReducer
    });
    const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
    epicMiddleware.run(rootEpic);
    console.log(store.getState())
    return store;
}
