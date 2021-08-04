import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {Switch, useParams, useRouteMatch} from "react-router";
import {deletePost, getPost} from "../actions/postActions";
import {clearComments, getComments} from "../actions/commentsAction";
import {Link, Route} from "react-router-dom";
import {AddPost} from "./AddPost";

export function Post(){
    const dispatch = useDispatch()
    const post = useSelector((state) => state.post.post)
    const comments = useSelector((state) => state.comments.comments)
    const { id }= useParams();
    let { path, url } = useRouteMatch();
    useEffect(()=>{
        if(id){
            dispatch(getPost(id))
        }
        return () => {
            dispatch(clearComments())
        }
    }, [dispatch])
    const showComments = () => {
      dispatch(getComments(id))
    }
    const removePost = () => {
      dispatch(deletePost(id))
    }
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-4">
                {post && <div className="col-start-2 col-end-3 row-start-2 bg-blue-100">
                    <h1 className="font-bold">{post.title}</h1>
                    <p>{post.body}</p>
                    <div className="flex flex-row justify-around">
                        <button onClick={showComments} className=" btn btn-submit">Show comments</button>
                        <button className="btn btn-update"><Link to={`${url}/edit`}>Update</Link></button>
                        <button onClick={removePost} className="btn btn-cancel">Delete</button>
                    </div>
                </div>}
                {
                    comments && comments.map((comment) => (
                        <div key={comment.id} className="grid grid-cols-3 border bg-gray-50">
                            <h1 className="font-bold ">{comment.name}</h1>
                            <p className="italic row-span-2">{comment.email}</p>
                            <p className="col-span-3 row-span-2">{comment.body}</p>
                        </div>
                    ))
                }
            </div>
            <Switch>
                <Route path={`${path}/edit`}>
                    <AddPost />
                </Route>
            </Switch>
        </div>

    )
}