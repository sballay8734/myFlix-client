import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

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
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user")
        }
      }).catch((e) => alert("Something went wrong"));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            value={username} // <----- this line
            onChange={(e) => setUsername(e.target.value)}
            minLength={5}
            required />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password} // <----- this line
            onChange={(e) => setPassword(e.target.value)}
            required />
      </Form.Group>
    
      <Button variant="primary" type="submit">Login</Button>
    </Form>
  );
};