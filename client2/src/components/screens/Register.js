import React, { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [cemail, setCemail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [cpassword, setCpassword] = useState(" ");

  const registerUser = async () => {
    if (password == cpassword) {
      const user = {
        name,
        email,
        cemail,
        password,
      };

      console.log(user);

      try {
        const result = await axios.post(
          "http://localhost:5000/api/register",
          user
        ).data;
      } catch (error) {
        console.log(error.message);
      }
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
