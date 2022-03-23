import React, { useState } from "react";
import axios from "axios";

import Error from "../Notification/Error";
import Loader from "../Notification/Loader";
import Success from "../Notification/Success";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  //Notification popups States
  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  const LoginUser = async () => {
    const user = {
      email,
      password,
    };

    console.log(user);

    try {
      setLoading(true);
      const result = await axios.post("http://localhost:5000/api/login", user)
        .data;
      setLoading(false);
      setSuccess(true);
      console.log(result);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {loading && <Loader />}
      {success && (
        <Success message={`Logged in, you'll be redirected shortly`} />
      )}
      {error && <Error message={`Invalid Credentials`} />}
      <input
        type="text"
        className=""
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        className=""
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={LoginUser}>Login</button>
    </div>
  );
};

export default Login;
