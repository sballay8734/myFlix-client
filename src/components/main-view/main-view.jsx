import { useState, useEffect } from "react";
import { MovieButton } from "../movie-button/movie-button";
import { MovieView } from "../movie-view/movie-view";
import {LoginView} from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = JSON.parse(localStorage.getItem("token"));

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
      .then((data) => console.log(data));

  }, [token]);

  // if no user logged in
  if (!user) {
    return (
      <>
        <LoginView onLoggedIn={(username, token) => {
          setUser(username);
          setToken(token);
        }} />
        or
        <SignupView />
      </>
    );
  }

  // if list is empty
  if (movies.length === 0) {
    return <div>List is Empty!</div>;
  }

  // if movie is selected
  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  // if no movie is selected
  return (
    <div>
      {movies.map((movie) => (
        <MovieButton
          key={movie.id}
          movie={movie}
          onMovieClick={(newlyClickedMovie) => {
            setSelectedMovie(newlyClickedMovie);
          }}
        />
      ))}
      <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
    </div>
  );
};


// login to API --- username: 167OLdP5BUfLZGxP  --- password: K39eKYhPMV9DDWhJ