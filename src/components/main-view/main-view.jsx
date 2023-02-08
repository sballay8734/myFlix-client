import { useState, useEffect } from "react";
import { MovieButton } from "../movie-button/movie-button";
import { MovieView } from "../movie-view/movie-view";
import {LoginView} from "../login-view/login-view";

export const MainView = () => {
  // manage movies
  const [movies, updateMovies] = useState([]);
  // manage selected movies
  const [selectedMovie, setSelectedMovie] = useState(null);
  // manage Login/Register
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://sbmovieapi.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((item) => {
          return {
            id: item._id,
            title: item.title,
            imgUrl: item.imagePath,
            director: item.director.name,
            genre: item.genre.name,
            description: item.description
          };
        });
        updateMovies(moviesFromApi)
      });
  }, []);

  // if no user logged in
  if (!user) {
    return <LoginView onLoggedIn={(username) => setUser(username)} />;
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
    </div>
  );
};


// login to API --- username: 167OLdP5BUfLZGxP  --- password: K39eKYhPMV9DDWhJ