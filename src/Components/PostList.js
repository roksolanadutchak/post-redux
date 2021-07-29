import React, { useEffect, useState} from "react";
import { useSelector, useDispatch} from "react-redux";
import {Link } from 'react-router-dom';
import { getPosts, deletePost, updatePost } from "../reducers/postActions";
import { default as dismiss } from '../assets/delete.svg';
import { default as pencil} from '../assets/pencil.svg'

export function PostList(){
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.app.data)
    const [deleteId, setDeleteId] = useState(0)

    useEffect(()=>{
        dispatch(getPosts());
     }, [dispatch])
    const setIdToDelete = id => event => {
        setDeleteId(id)
    }
    const deletePostById = () =>{
        dispatch(deletePost(deleteId))
    }
    return (
    <div className="container mx-auto ">
        <div className="post-wrapper">
            { posts && posts.map((post) => (
                <div key={post.id} className="card" >
                    <div className="card-header" onClick={setIdToDelete(post.id)}>
                        <div className="col-span-11">
                            <h1 className="text-center">{post.title}</h1>
                        </div>
                        <div>
                            <button>
                                <Link to={`/edit/${post.id}`}><img src={pencil} alt={'update'}/></Link>
                            </button>
                            <button onClick={deletePostById}><img src={dismiss} alt={'delete'}/></button>
                        </div>
                    </div>
                    <div className="m-3">
                        <p className="text-justify leading-relaxed">{post.body}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=>dispatch(deletePost(1))}>delete post</button>
    </div>
)

}