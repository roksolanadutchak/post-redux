import './App.css';
import {
    Switch,
    Route
} from "react-router-dom";
import {PostList} from "./Components/PostList";
import {AddPost} from "./Components/AddPost";
import Header from "./Components/Header";
function App() {
  return (
    <div className="App">
        <div>
            <Header />
        </div>
        <Switch>
            <Route exact path="/">
                <PostList />
            </Route>
            <Route path="/add">
                <AddPost />
            </Route>
        </Switch>
    </div>
  );
}

export default App
