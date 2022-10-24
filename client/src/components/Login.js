import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
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

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-bttn">
          <label htmlFor="email"></label>

          <TextField
          label="Email Address" 
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
            placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
        <Button onSubmit={handleFormSubmit} type="submit" color="primary">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
