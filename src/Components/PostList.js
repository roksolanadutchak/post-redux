import React, { useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import { getPosts } from "../reducers/postActions";
export function PostList(){
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.app.data)

    useEffect(()=>{
        dispatch(getPosts());
     }, [dispatch])

    return (
    <div className="container mx-auto ">
        <div className="post-wrapper">
            { posts && posts.map((post) => (
                <div key={post.id} className="card" >
                    <div className="card-header" >
                        <div className="col-span-11">
                            <h1 className="text-center">{post.title}</h1>
                        </div>
                    </div>
                    <div className="m-3">
                        <p className="text-justify leading-relaxed">{post.body}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
)

}