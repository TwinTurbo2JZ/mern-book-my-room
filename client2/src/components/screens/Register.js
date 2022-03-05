import React, { useState, useEffect } from "react";

const Register = () => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [cemail, setCemail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [cpassword, setCpassword] = useState(" ");

  const registerUser = () => {
    if (password == cpassword) {
      const user = {
        name,
        email,
        cemail,
        password,
      };

      console.log(user);
    } else {
      alert("Passwords don't match");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        className=""
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
        placeholder="confirm email"
        value={cemail}
        onChange={(e) => setCemail(e.target.value)}
      />
      <input
        type="text"
        className=""
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        className=""
        placeholder="confirm password"
        value={cpassword}
        onChange={(e) => setCpassword(e.target.value)}
      />
      <button onClick={registerUser}>Register</button>
    </div>
  );
};

export default Register;
