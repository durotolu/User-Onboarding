import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function FormBuild() {
    return (
        <Formik render={props => {
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