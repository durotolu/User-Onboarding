import React from 'react';
import './App.css';
import FormBuild from './Form';

const buildApi = 'https://reqres.in/api/users_';

function App() {
  // useEffect(() => {
  //   fetchBuildData 
  // }, [])
  const addBuildData = (formValues, action) => {//needs to comply with formik, requires 2 arguments; values and action.
    debugger
    const formToPost = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
    }
  }

  return (
    <div className="App">
      <FormBuild onSubmit={addBuildData} />
    </div>
  );
}

export default App;
