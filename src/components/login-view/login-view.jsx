import React from "react";
import { useState } from "react";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // access and secret is required/designated by api
    const data = {
      username: username,
      password: password
    }
  
    fetch("https://sbmovieapi.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login Response: ", data);
        if (data.user) {
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user");
        }
      }).catch((e) => alert("Something went wrong"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username:
        <input
          type="text"
          value={username} // <----- this line
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          id="username"
          minLength={5}
          required />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          value={password} // <----- this line
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password"
          required />
      </label>
      <button type="submit">Submit</button>
      {/* for ease of use */}
      <p>username: 167OLdP5BUfLZGxP</p>
      <p>password: K39eKYhPMV9DDWhJ</p>
    </form>
  );
};