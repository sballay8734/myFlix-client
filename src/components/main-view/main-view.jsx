import { useState } from "react";
import { MovieButton } from "../movie-button/movie-button";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  // manage movies
  const [movies, updateMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      genre: "Action",
      director: "Christopher Nolan",
      imgUrl:
        "https://lastfm.freetls.fastly.net/i/u/ar0/fe27be04693b9a1c81596bb0af0c26e1"
    },
    {
      id: 2,
      title: "Gladiator",
      description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      genre: "Action",
      director: "Ridley Scott",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs479Rbe-hDZ_fiaUURgsq8JVWaDeBkk7R6jN8kC1OYw&s"
    },
    {
      id: 3,
      title: "The Shawshank Redemption",
      description:
        "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
      genre: "Drama",
      director: "Frank Darabont",
      imgUrl:
        "https://e.snmc.io/i/1200/s/221a2004d475470f89bd5924e74de726/2108234"
    }
  ]);
  // manage selected movies
  const [selectedMovie, setSelectedMovie] = useState(null);

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
