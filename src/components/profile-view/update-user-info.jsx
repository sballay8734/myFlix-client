import React, { useState } from 'react';
import { Button, Form, Row, Col, CardGroup, Card } from 'react-bootstrap';

export const UpdateUserInfo = ({ storedToken, storedUser }) => {
  const [token, setToken] = useState(storedToken ? storedToken : null)
  const [user, setUser] = useState(storedUser ? storedUser : null)

  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState(user.password);
  const [email, setEmail] = useState(user.email);
  const [birthDate, setBirthdate] = useState(user.birthDate)

  // update user after form submit *********************************************
  const updateUser = (username) => {
    fetch(`https://sbmovieapi.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((foundUser) => {
        if (foundUser) {
          setUser(foundUser);
          localStorage.setItem('user', JSON.stringify(foundUser));
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // handle submit *************************************************************
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
      email: email,
      birthDate: birthDate
    };

    // Important! Fetching storedUsers username, NOT username
    fetch(`https://sbmovieapi.herokuapp.com/users/${storedUser.username}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    }
  )
    .then((response) => {
      if (response.ok) {
        alert('Change Successful');
        updateUser(username)
      } else {
        alert('Something went wrong')
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

  return (
    <Row className="mt-2 justify-content-center">
      <Col md={5}>
        <CardGroup>
          <Card className='border-0'>
            <Card.Body id="card-body">
              <div className='text-start h2 mb-0'>Update user info</div>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId='forUsername' className='mt-2'>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type='text'
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minLength='3'
                    pattern="^[A-Za-z0-9 .,'\-!?%&]+$"
                    title="Username must contain more than 3 characters and may only contain letters, numbers and special characters: .,'-!?%&"
                    placeholder='Update username'
                  />
                </Form.Group>
                <Form.Group controlId='forPassword' className='mt-2'>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    pattern="^[A-Za-z0-9 .,'\-!?%&]+$"
                    title="Password must only contain letters, numbers and special characters: .,'-!?%&"
                    placeholder='Update password'
                  />
                </Form.Group>
                <Form.Group controlId='forEmail' className='mt-2'>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder='Update email'
                  />
                </Form.Group>
                <Form.Group controlId='forBirthday' className='mt-2'>
                  <Form.Label>Birthday:</Form.Label>
                  <Form.Control
                    type='date'
                    onChange={(e) => setBirthdate(e.target.value)}
                  />
                </Form.Group>
                <Row>
                  <Col className='text-center'>
                    <Button variant='primary' type='submit' className='mt-3'>
                      Update
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </CardGroup>
      </Col>
    </Row>
  )
}