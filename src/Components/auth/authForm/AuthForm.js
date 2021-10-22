import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const AuthForm = ({ signUp, signIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const location = useLocation();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    name === "email" && setEmail(value);
    name === "password" && setPassword(value);
    name === "displayName" && setDisplayName(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    location.pathname === "/signup"
      ? signUp({ email, password, displayName })
      : signIn({ email, password });
  };

  return (
    <form onSubmit={onHandleSubmit}>
      {location.pathname === "/signup" && (
        <label>
          Name
          <input
            type='text'
            value={displayName}
            onChange={onHandleChange}
            name='displayName'
          />
        </label>
      )}
      <label>
        Email
        <input
          type='text'
          value={email}
          onChange={onHandleChange}
          name='email'
        />
      </label>
      <label>
        Password
        <input
          type='text'
          value={password}
          onChange={onHandleChange}
          name='password'
        />
      </label>
      <button type='submit'>
        {location.pathname === "/signup" ? "Sign up" : "Sign in"}
      </button>
    </form>
  );
};

export default AuthForm;
