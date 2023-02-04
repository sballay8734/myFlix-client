import PropTypes from "prop-types";

export const MovieButton = ({ movie, onMovieClick }) => {
  return <div onClick={() => onMovieClick(movie)}>{movie.title}</div>;
};


// prop constraints
MovieButton.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    director: PropTypes.string
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};