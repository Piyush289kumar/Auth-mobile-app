import React, { useState } from "react";
import LoginPageImg from "../assets/img/mobile-med.jpg";
import axios from "axios";
function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const registerHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/register", {
        userName,
        password,
      })
      .then((response) => {
        alert("User Registered Successfully");
      })
      .catch((error) => {
        alert("User Registered is not Successfully");
      });
  };

  return (
    <>
      <div className="loginContainer bg-white w-[50vh] h-[90vh] m-auto rounded-3xl overflow-hidden">
        <div className="loginPage flex flex-col justify-center">
          <img src={LoginPageImg} alt="Login Page Img" className="px-16 py-9" />
          <h1 className="font-bold text-2xl mx-auto font-custom mb-5">
            Register Page
          </h1>
          <form
            onSubmit={registerHandler}
            method="post"
            className="flex flex-col justify-center px-8"
          >
            <input
              type="text"
              name="UserName"
              id="userName"
              placeholder="User Name"
              onChange={(event) => setUserName(event.target.value)}
              value={userName}
              className="border border-zinc-600 rounded-2xl px-4 py-2 text-zinc-800 mt-5"
            />
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              className="border border-zinc-600 rounded-2xl px-4 py-2 text-zinc-800 mt-5"
            />
            <button
              type="submit"
              className="bg-violet-500 text-white mt-6 w-1/2 rounded-2xl py-2 mx-auto font-bold"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
