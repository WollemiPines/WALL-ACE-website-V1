import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  }
  catch (e) {
    console.log(e);
  }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-bttn">
          <label htmlFor="firstName"></label>
          <TextField
            placeholder="First Name"
            name="firstName"
            type="firstName"
            id="firstName"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
        <div className="form-bttn">
          <label htmlFor="lastName"></label>
          <TextField
            placeholder="Last Name"
            name="lastName"
            type="lastName"
            id="lastName"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
        <div className="form-bttn">
          <label htmlFor="email"></label>
          <TextField
          label="Email@email.com" 
          name="email"
          type="email" 
          variant="outlined"
          id="email"
          onChange={handleChange}
          />
        </div>
        <div className="form-bttn">
          <label htmlFor="pwd"></label>
          <TextField
          id="pwd"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={handleChange}
        />
     
        </div>
        {error ? (
          <div>
            <p className="error-text">Please enter a unique email and/or password with min 5 charaters</p>
          </div>
        ) : null}

        <div>
          <Button onSubmit={handleFormSubmit} type="submit" color="primary">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
