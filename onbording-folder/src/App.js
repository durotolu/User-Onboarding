import React, { useState } from 'react';
import './App.css';
import FormBuild from './Form';
import axios from 'axios';
import User from './Userlist';

const buildApi = 'https://reqres.in/api/users_';
const initialFormValue = {
  name: '',
  email: '',
  password: '',
  tos: false,
}

function App() {
  const [usersList, setUsersList] = useState([])
  // useEffect(() => {
  //   fetchBuildData 
  // }, [])
  //const [formValues, setFormValues] = useState(initialFormValue);

  const addBuildData = (formValues, action) => {//needs to comply with formik, requires 2 arguments; values and action.
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
        const newlyCreatedUser = res.data;
        setUsersList(usersList.concat(newlyCreatedUser))
        console.log(usersList);
        action.resetForm();
      })
      .catch(err => {
        debugger
      })
  }

  return (
    <div className="App">
      <FormBuild initialformValues={initialFormValue} onSubmit={addBuildData} />
      <User usersList={usersList} />
    </div>
  );
}

export default App;
