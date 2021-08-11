import './App.css';
import {
    Switch,
    Route
} from "react-router-dom";
import {PostList} from "./Components/PostList";
import {AddPost} from "./Components/AddPost";
import Header from "./Components/Header";
import {UsersList} from "./Components/UsersList";
import {Post} from "./Components/Post";

function App() {
  return (
    <div className="App">
        <div>
            <Header />
        </div>
        <Switch>
            <Route exact path="/">
                <UsersList />
            </Route>
            <Route path="/posts">
                <PostList />
            </Route>
            <Route path="/add">
                <AddPost />
            </Route>
            <Route path="/post/:id">
                <Post />
            </Route>
            <Route path="/edit/:id">
                <AddPost />
            </Route>
        </Switch>
    </div>
  );
}

export default App
