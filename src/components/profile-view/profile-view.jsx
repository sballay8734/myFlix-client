import { Route, Routes, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { UpdateUserInfo } from './update-user-info';

export const ProfileView = ({ user, token }) => {
  const { username } = useParams();
  const [currentUser, updateCurrentUser] = useState(user);

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
    <div className="profile-info">
      <h1>ProfileView of {username}</h1>
      <div>Email: {currentUser.email}</div>
      <div>Favorite Movies: {currentUser.favoriteMovies}</div>
      {/* <div>{<UpdateUserInfo user={currentUser} handleSubmit={handleSubmit} handleUpdate={handleUpdate} />}</div> */}

    </div>
  )
}