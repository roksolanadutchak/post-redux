import React, { useEffect } from "react";
import {useParams} from "react-router";
import { Form, Formik, Field } from "formik";
import {useDispatch, useSelector} from "react-redux";
import {addPost, getPost, updatePost} from "../reducers/postActions";

export function AddPost(){
    const dispatch = useDispatch()
    const post = useSelector((state) => state.app.data)
    const { id }= useParams();
    useEffect(()=>{
        dispatch(getPost(id))
    }, [dispatch])
    return(
        <div>
            <h1>Add Post</h1>
            <div>{ post.body }</div>
            <Formik enableReinitialize
                initialValues={{id : id, title: id ? post.title : '', body: id ? post.body : '', userId: id ? post.userId : 0}}
                onSubmit={(values, actions) => {
                   //dispatch(addPost(values))
                    dispatch(updatePost(values))
                    console.log('work')
                }}
            >
                <Form>
                    <Field name="title" placeholder="title" className="input" />
                    <Field name="body" placeholder="body" className="input"/>
                    <Field name='userId' placeholder="userId" className="input"/>
                    <button type="submit" className="btn btn-submit">Add Post</button>
                </Form>
            </Formik>
        </div>
    )
}