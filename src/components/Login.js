import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUsers } from "../reduc/authSlice";

function Login() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        credentials
      );
      console.log(response.data.message); // Display response message
      // Optionally, you can store the JWT token in local storage or Redux store for authentication
      dispatch(setUsers(credentials));

      setTimeout(() => {
        window.location.href = "/welcome";
      }, 2000);
    } catch (error) {
      console.error("Error in login", error);
      setError(error.response.data.message); // Set error message received from server
    }
  };

  return (
    <div className="container">
      <h2 className="text-center text-primary">Login</h2>
      {error && <p className="text-danger">{error}</p>}{" "}
      {/* Display error message */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary ">
          Login
        </button>
        <div classs="mt-4 pt-4">
          <p>
            New user ? <a href="/register">Register</a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
