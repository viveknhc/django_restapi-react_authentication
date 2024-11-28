import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve username from localStorage
    const loggedUser = localStorage.getItem("username");
    if (loggedUser) {
      setUsername(loggedUser);
    } else {
      // If no user is logged in, redirect to login
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    // Redirect to the login page
    navigate("/");
  };

  return (
    <>
      <h1>Home Page</h1>
      {username ? <h2>Welcome, {username}!</h2> : <p>Loading...</p>}

      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
