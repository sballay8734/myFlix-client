import { useState } from 'react';
import { MainView } from '../main-view/main-view';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
      email: email,
      birthDate: birthDate
    }

    // replace this url with your API address
    fetch("https://sbmovieapi.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.ok) {
        alert("Signup successful");
        window.location.reload();
      } else {
        alert("Signup failed");
      }
    })

  }

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
      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email} // <----- this line
            onChange={(e) => setEmail(e.target.value)}
            required />
      </Form.Group>
      <Form.Group controlId="formBirthDate">
        <Form.Label>Birthday:</Form.Label>
          <Form.Control
            type="date"
            value={birthDate} // <----- this line
            onChange={(e) => setBirthDate(e.target.value)}
            required />
      </Form.Group>
    
      <Button variant="primary" type="submit">Sign Up</Button>
    </Form>
  )
}