import { useState } from 'react';
import { MainView } from '../main-view/main-view';

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
    fetch("SIGNUP_URL", {
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
    <div>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Inputs */}
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input
          type="password" 
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input
          type="email" 
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="birthDate">Birthday:</label>
        <input
          type="date"
          name="birthDate"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)} />

        {/* Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}