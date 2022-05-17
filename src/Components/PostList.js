import React, {useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
export function PostList(){
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.app.data)

    return (
        <div>
            <h1>Bye there!</h1>ß
        </div>
    )
}