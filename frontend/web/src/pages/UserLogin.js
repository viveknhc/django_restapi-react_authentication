import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setError(""); // Clear previous errors
    try {
      const response = await axios.post("http://127.0.0.1:8000/login/", {
        username,
        password,
      });
      // Save token in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username",username);
      // Redirect to Home page
      navigate("/home");
    } catch (error) {
      if (error.response) {
        // Display error message from the backend
        setError(error.response.data.error);
      } else {
        // Handle other errors
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
      <h3>Login</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

      <p>click <Link to="/registration">here</Link> for registration</p>
    </div>
  );
}
