export const MovieButton = ({ movie, onMovieClick }) => {
  return <div onClick={() => onMovieClick(movie)}>{movie.title}</div>;
};