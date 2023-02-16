import { useState, useEffect } from 'react';
import { MovieButton } from '../movie-button/movie-button';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  const [movies, updateMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://sbmovieapi.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((movie) => {
          return {
            id: movie.id,
            title: movie.title,
            description: movie.description,
            genre: movie.genre.name,
            imgUrl: movie.imagePath,
            director: movie.director.name
          }
        })
        updateMovies(moviesFromApi);
        console.log("Movies: ", movies);
      })
  }, [token]);

  return (
    <BrowserRouter>
    <NavigationBar user={user} onLoggedOut={() => {setUser(null); setToken(null); localStorage.clear()}}/>
      <Row className="justify-content-md-center">
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
                    <LoginView onLoggedIn={(user) => setUser(user)} />
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
                    <MovieView movies={movies} />
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
                        <Col className="mb-4" key={movie.id} md={3}>
                          <MovieButton movie={movie} />
                        </Col>
                      ))}
                    </>
                  )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  )
}






//         {/* if no user, return LoginView and SignupView PUT IN PARENTHESES */}
//         {!user ? (
//           <Col md={5}>
//             <LoginView onLoggedIn={(username, token) => {
//               setUser(username);
//               setToken(token);
//             }} />
//             <SignupView />
//           </Col>
//           // otherwise, if a selectedMovie exists, return MovieView
//         ) : selectedMovie ? (
//           <Col md={8}>
//             <MovieView
//               movie={selectedMovie}
//               onBackClick={() => setSelectedMovie(null)}
//             />
//           </Col>
//           // if no selectedMovie exists, check movies.length and return <div> if 0
//         ) : movies.length === 0 ? (
//           <div>The list is empty!</div>
//         ) : (
//           // if movies.length ! === 0, return movies.map function
//           <>
//             {movies.map((movie) => (
//               <Col key={movie.id} md={3} className="mb-5">
//                 <MovieButton
//                   key={movie.id}
//                   movie={movie}
//                   onMovieClick={(newlyClickedMovie) => {
//                     setSelectedMovie(newlyClickedMovie);
//                   }}
//                 />
//               </Col>
//             ))}
//           </>
//         )}