import React from 'react';

import { UpdateUserInfo } from './update-user-info';
import { UserInfo } from './user-info';
import { FavoriteMovies } from './favorite-movies';
import { DeleteUser } from './delete-user';

export const ProfileView = ({ movies }) => {
  const storedToken = localStorage.getItem('token');
  const storedUser = JSON.parse(localStorage.getItem('user'))

  return (
    <>
      <UserInfo user={storedUser} />
      <UpdateUserInfo storedToken={storedToken} storedUser={storedUser} />
      <DeleteUser storedToken={storedToken} storedUser={storedUser} />
      <FavoriteMovies movies={movies} storedUser={storedUser} />
    </>
  )
}