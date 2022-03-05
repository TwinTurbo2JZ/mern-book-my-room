import React, { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const LoginUser = () => {
    const user = {
      email,
      password,
    };

    console.log(user);
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
