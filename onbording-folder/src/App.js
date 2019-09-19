import React, { useState } from 'react';
import './App.css';
import FormBuild from './Form';
import axios from 'axios';

const buildApi = 'https://reqres.in/api/users_';
const initialFormValue = {
  name: '',
  email: '',
  password: '',
  tos: false,
}

function App() {
  // useEffect(() => {
  //   fetchBuildData 
  // }, [])
  //const [formValues, setFormValues] = useState(initialFormValue);

  const addBuildData = (formValues, action) => {//needs to comply with formik, requires 2 arguments; values and action.
    debugger
    const formToPost = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      tos: formValues.tos,
    }

    axios.post(buildApi, formToPost)
      .then(res => {
        console.log(res);
        debugger
      })
  }

  return (
    <div className="App">
      <FormBuild initialformValues={initialFormValue} onSubmit={addBuildData} />
    </div>
  );
}

export default App;
