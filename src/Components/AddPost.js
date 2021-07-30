import React, { useEffect } from "react";
import {useParams} from "react-router";
import { Form, Formik, Field } from "formik";
import {useDispatch, useSelector} from "react-redux";
import {addPost, getPost, updatePost} from "../actions/postActions";

export function AddPost(){
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.data)
    const { id }= useParams();
    useEffect(()=>{
        if(id){
            dispatch(getPost(id))
        }
    }, [dispatch])
    const submitForm = (values) => {
        if(id){
            dispatch(updatePost(values))
        } else {
            dispatch(addPost(values))
        }
    }
    return(
        <div>
            { id ? <h1>Update Post</h1> : <h1>Add Post</h1> }
            <Formik enableReinitialize
                initialValues={{id : id, title: id ? posts.title : '', body: id ? posts.body : '', userId: id ? posts.userId : 0}}
                onSubmit={(values, actions) => {
                   //dispatch(addPost(values))
                    submitForm(values)
                }}
            >
                <Form>
                    <Field name="title" placeholder="title" className="input" />
                    <Field name="body" placeholder="body" className="input"/>
                    <Field name='userId' placeholder="userId" className="input"/>
                    {id ? <button type="submit" className="btn btn-submit">Update Post</button> : <button type="submit" className="btn btn-submit">Add Post</button> }
                </Form>
            </Formik>
        </div>
    )
}