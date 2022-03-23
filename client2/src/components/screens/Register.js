import React, { useState } from "react";
import axios from "axios";

import Error from "../Notification/Error";
import Loader from "../Notification/Loader";
import Success from "../Notification/Success";

const Register = () => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [cemail, setCemail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [cpassword, setCpassword] = useState(" ");

  //Notification popups States
  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  let result;

  const registerUser = async () => {
    if (password === cpassword) {
      const user = {
        name,
        email,
        cemail,
        password,
      };

      console.log(user);

      try {
        setLoading(true);
        result = await axios.post("http://localhost:5000/api/register", user)
          .data;
        //console.log(result, `1`);
        setLoading(false);
        setSuccess(true);
      } catch (err) {
        setLoading(false);
        setError(true);
        console.log(err.message);
      }
    } else {
      alert("Passwords don't match");
    }
  };

  return (
    <div>
      {loading && <Loader />}
      {success && <Success message={`Thanks for registerig with us`} />}
      //can move it inside div to style later on
      {error && <Error message={`something went wrong`} />}
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
