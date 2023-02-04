import { useState, useEffect } from "react";
import { MovieButton } from "../movie-button/movie-button";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  // manage movies
  const [movies, updateMovies] = useState([]);

  // manage selected movies
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=star+wars")
      .then((response) => response.json())
      .then((data) => {
        const booksFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            imgUrl: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
            author: doc.author_name?.[0]
          };
        });
        updateMovies(booksFromApi);
      });
  }, []);

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
