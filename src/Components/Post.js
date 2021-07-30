import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {getPost} from "../actions/postActions";

export function Post(){
    const dispatch = useDispatch()
    const post = useSelector((state) => state.post.post)
    console.log(post)
    const { id }= useParams();
    useEffect(()=>{
        if(id){
            dispatch(getPost(id))
        }
    }, [dispatch])
    return (
        <div>
            {post && <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>}
        </div>
    )
}