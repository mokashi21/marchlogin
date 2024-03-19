import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUsers } from "../reduc/authSlice";

function Register() {
  const dispatch = useDispatch();
  const [userInput, setUserinput] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserinput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/register",
        userInput
      );
      console.log(response);
      dispatch(setUsers(userInput));
      setUserinput({
        name: "",
        email: "",
        number: "",
        password: "",
      });
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      console.log("Error in register", error);
    }
  };

  return (
    <div class="container">
      <h2 class="text-center text-bg-primary">Registration Form</h2>
      <div class="mt-5">
        <form onSubmit={handleSubmit}>
          <div class="d-flex justify-content-between ">
            <div>
              <label htmlFor="name">Name : </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                value={userInput.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={userInput.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="number">Number : </label>
              <input
                type="number"
                placeholder="Enter Your number"
                name="number"
                value={userInput.number}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password : </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                value={userInput.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div class="text-center mt-5">
            <button class="btn btn-outline-primary " type="submit">
              Register
            </button>
            <p>
              Already a user? <a href="/login">Login</a>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
