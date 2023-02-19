import React, {useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import { MovieButton } from '../movie-button/movie-button';

export const FavoriteMovies = ({ movies, storedUser }) => {
  const [user, setUser] = useState(storedUser ? storedUser : null);
  let favoriteMoviesList = movies.filter((m) => user.favoriteMovies.includes(m._id))

  return (
    <Row className='text-center mt-3'>
      {favoriteMoviesList.length === 0 ? (
        <Col>Currently no favorite movies</Col>
      ) : (
        <>
          <div className='text-start h2 mb-4'>List of favorite movies</div>
          {favoriteMoviesList.map((movie) => (
            <Col className='mb-5' key={movie._id} xs={12} sm={6} md={4} lg={3}>
              <MovieButton
                movieData={movie}
                user={user}
                updateUserOnFav={(user) => {
                  console.log('Update User called', user);
                  setUser(user);
                  localStorage.setItem('user', JSON.stringify(user));
                }}
              />
            </Col>
          ))}
        </>
      )}
    </Row>
  )

}