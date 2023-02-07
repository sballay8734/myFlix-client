import React from "react";
import { useState } from "react";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // access and secret is required/designated by api
    const data = {
      access: username,
      secret: password
    }
  
    fetch("https://openlibrary.org/account/login.json", {
      method: "POST",
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.ok) {
        onLoggedIn(username);
      } else {
        alert("Login failed")
      }
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Username">
        Username:
        <input
          type="text"
          value={username} // <----- this line may not be necessary
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          id="username" />
      </label>
      <label htmlFor="Password">
        Password:
        <input
          type="text"
          value={password} // <----- this line may not be necessary
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password" />
      </label>
      <button type="submit">Submit</button>
      {/* for ease of use */}
      <p>username: 167OLdP5BUfLZGxP</p>
      <p>password: K39eKYhPMV9DDWhJ</p>
    </form>
  );
};