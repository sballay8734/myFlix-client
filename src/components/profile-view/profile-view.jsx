import { Route, Routes, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserInfo } from './user-info';
import { UpdateUserInfo } from './update-user-info';

export const ProfileView = ({ user, token }) => {
  const { username } = useParams();
  const [currentUser, updateCurrentUser] = useState(user);

  const handleUpdate = (e) => {
    // updateCurrentUser({email: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://sbmovieapi.herokuapp.com/users/${currentUser.username}`, {
      method: 'PUT',
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          username: document.getElementById('username-field').value,
          // password: getElementById('password-field').value,
          email: document.getElementById('email-field').value
        }
      )
    }).then((data) => {
      alert("Success!", console.log(data))
    }).catch((error) => console.log(error))
  }


  useEffect(() => {
    fetch(`https://sbmovieapi.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}`}
    })
      .then((response) => response.json())
      .then((data) => {
        const currentUser = {
          id: data._id,
          username: data.username,
          email: data.email,
          favoriteMovies: data.favoriteMovies
        }
        updateCurrentUser(currentUser);
      })

  }, [user])


  return (
    <div>
      <UserInfo user={currentUser} />
      <UpdateUserInfo user={currentUser} handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
    </div>
  )
}