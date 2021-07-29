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
            <h1>Add Post</h1>
            <Formik enableReinitialize
                initialValues={{id : id, title: id ? post.title : '', body: id ? post.body : '', userId: id ? post.userId : 0}}
                onSubmit={(values, actions) => {
                   //dispatch(addPost(values))
                    submitForm(values)
                    console.log('work')
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