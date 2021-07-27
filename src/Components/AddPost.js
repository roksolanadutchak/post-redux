import React from "react";
import { Form, Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { addPost} from "../reducers/postActions";

export function AddPost(){
    const dispatch = useDispatch()

    return(
        <div>
            <h1>Add Post</h1>
            <Formik
                initialValues={{title: '', body: '', userId: 1}}
                onSubmit={(values, actions) => {
                   dispatch(addPost(values))
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