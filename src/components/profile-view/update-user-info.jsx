import React from 'react';
import Button from 'react-bootstrap/Button';

export const UpdateUserInfo = ({ user, handleSubmit, handleUpdate }) => {
  return (
    <form className='profile-form' onSubmit={(e) => handleSubmit(e)}>
      <h2>Want to change some info {user.username}?</h2>
      <label>Username: </label>
      <input
        type='text'
        name='username'
        id='username-field'
        defaultValue={user.username}
        // onChange={e => handleUpdate(e.target.value)} 
      />
      <label>Password: </label>
      <input
        type='password'
        name='password'
        id='password-field'
        // defaultValue={user.password}
        // onChange={e => handleUpdate(e.target.value)} 
      />
      <label>Email: </label>
      <input
        type='email'
        name='email'
        id='email-field'
        defaultValue={user.email}
        // onChange={e => handleUpdate(e)}
      />
      <Button className='user-info-button' variant='primary' type='submit'>Update</Button>
    </form>
  )
}