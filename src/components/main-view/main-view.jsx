import { useState, useEffect } from 'react';

import { MovieButton } from '../movie-button/movie-button';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { ProfileView } from '../profile-view/profile-view';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  const [movies, updateMovies] = useState([]);
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);

  useEffect(() => {
    if (!token) {
      console.log("No token");
      return;
    }

    fetch("https://sbmovieapi.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((movie) => {
          return {
            id: movie._id,
            title: movie.title,
            description: movie.description,
            genre: movie.genre.name,
            imgUrl: movie.imagePath,
            director: movie.director.name
          }
        })
        updateMovies(moviesFromApi);
        // localStorage.setItem("movies", JSON.stringify(moviesFromApi))
      });
  }, [token]);

  return (
    <BrowserRouter>
    <NavigationBar user={user} onLoggedOut={() => {setUser(null); setToken(null); localStorage.clear()}}/>
      <Row className="justify-content-md-center mt-4">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            } 
          />
          <Route 
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView onLoggedIn={(user) => {setUser(user); setToken(token)}} />
                  </Col>
                )}
              </>
            }
          />
          <Route 
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <MovieView
                      movies={movies}
                      user={user}
                      updateUserOnFav={(user) => {
                        console.log('Update User Called', user);
                        setUser(user);
                        localStorage.setItem('user', JSON.stringify(user));
                      }} />
                  </Col>
                )}
              </>
            }
          />
          <Route 
            path="/"
            element={
              <>
                {!user ? (<Navigate to="/login" replace />)
                  : movies.length === 0 ? (<Col>The list is empty!</Col>)
                  : (
                    <>
                      {movies.map((movie) => (
                        <Col className="mb-4" key={movie._id} md={3}>
                          <MovieButton
                            movie={movie}
                            user={user}
                            updateUserOnFav={(user) => {
                              console.log('Update User called', user);
                              setUser(user);
                              localStorage.setItem('user', JSON.stringify(user))
                            }} />
                        </Col>
                      ))}
                    </>
                  )}
              </>
            }
          />
          <Route
            path="/users/:username"
            element={
              <>
                {!user ? (<Navigate to="/login" replace />)
                  : (<ProfileView movies={movies} />)}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  )
}