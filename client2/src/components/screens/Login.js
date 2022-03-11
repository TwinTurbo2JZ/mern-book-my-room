import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const LoginUser = async () => {
    const user = {
      email,
      password,
    };

    console.log(user);

    try {
      const result = await axios.post("http://localhost:5000/api/login", user)
        .data;
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>

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
