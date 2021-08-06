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
import { tap } from 'rxjs';

export function configureStore(){
    const rootEpic = (action$, store) =>
        combineEpics(postsEpic, postEpic, addPostEpic, deletePostEpic, updatePostEpic,getUsersEpic, userPostsEpic, commentsEpic)(action$, store).pipe(
            tap({
                error: error => console.error('ERROR: ', error)
            })
        )
    const epicMiddleware = createEpicMiddleware();
    const appReducer = combineReducers({
        app: postsListReducer,
        post: postReducer,
        users: UsersListReducer,
        userPosts: UserPostsReducer,
        comments: CommentsReducer
    });
    const rootReducer = (state, action) => {
      if (action.type === CLEAR_USER_POST){
          state.userPosts.userPosts = undefined;
      } else if(action.type === CLEAR_COMMENTS){
          state = undefined;
      }
      return appReducer(state, action);
    }
    const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
    epicMiddleware.run(rootEpic);
    console.log(store.getState())
    return store;
}
