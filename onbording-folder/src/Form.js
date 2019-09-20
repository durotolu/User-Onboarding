import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    name: yup.string()
                .max(50, 'Field cannot be longer than 50 characters')
                .required('Name is required'),
    email: yup.string()
            .email('Email should be in example@email.com format')
            .required('Email is required'),
    password: yup.string()
                .required('Kindly input password into field')
                //.min(6, 'Password cannot be less than 6 characters'),
})

function FormBuild(props) {
    const { onSubmit, initialformValues } = props;
    return (
        <Formik initialformValues={initialformValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            render={props => {
                return (
                    <Form>
                        <div>
                            <Field name='name' type='text' placeholder='Name' />
                            <ErrorMessage name='name' component='div' />
                        </div>
                        <div>
                            <Field name='email' type='text' placeholder='Email' />
                            <ErrorMessage name='email' component='div' />
                        </div>
                        <div>
                            <Field name='password' type='text' placeholder='Password' />
                            <ErrorMessage name='name' component='div' />
                        </div>
                        <div>
                            <label>
                                <Field name='tos' type='checkbox' />
                                Accept Terms of Service
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                )
            }} />
    )

}

export default FormBuild;

// - Name
// - Email
// - Password
// - Terms of Service (checkbox)
// - A Submit button to send our form data to the server.