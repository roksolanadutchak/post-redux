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
    const postLoading = useSelector((state) => state.post.loading)
    const postError = useSelector((state) => state.post.error)
    const comments = useSelector((state) => state.comments.comments)
    const commentsLoading = useSelector((state) => state.comments.loading)
    const { id }= useParams();

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
    if (postLoading) return <div className="loader">Loading...</div>;
    if (postError) return <h1 className="text-red-900 uppercase">{postError.message}</h1>

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-4">
                {post && <div className="post-container">
                    <div className="grid">
                        <h1 className="font-bold uppercase">{post.title}</h1>
                        <p className="text-justify m-1.5">{post.body}</p>
                        <div className="btn-group">
                            <button onClick={showComments} className=" btn btn-submit">Show comments</button>
                            <button className="btn btn-update"><Link to={`/edit/${id}`}>Update</Link></button>
                            <button onClick={removePost} className="btn btn-cancel">Delete</button>
                        </div>
                    </div>
                </div>}
                { commentsLoading ? <div className="loader">Loading...</div> :
                    comments && comments.map((comment) => (
                        <div key={comment.id} className="comment-container">
                            <h1 className="font-bold ">{comment.name}</h1>
                            <p className="italic">{comment.email}</p>
                            <p className="comment-body">{comment.body}</p>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}