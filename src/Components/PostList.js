import React, {useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import {getPosts, getPostsCanceled} from "../reducers/postActions";
export function PostList(){
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.app.data)
    useEffect(()=>{
        dispatch(getPosts());
     })
    return (
        <div>
            <button onClick={() => dispatch(getPostsCanceled())}>stopLoading</button>
            {posts && posts.map((post) => <div key={post.id}><h1>{post.title}</h1>
                <p>{post.body}</p></div>)}
        </div>
    )
}