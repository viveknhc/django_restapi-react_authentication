import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const res = await axios.post("http://127.0.0.1:8000/register/", {
        username,
        password,
      });

      setResponse(JSON.stringify(res.data));
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data) {
        setResponse(JSON.stringify(error.response.data));
      } else {
        setResponse("Failed to connect to the server.");
      }
    }
  };

  return (
    <div>
      <h3>Registration Form</h3>
      <pre>{response}</pre>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
