import PropTypes from "prop-types";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <img src={movie.imgUrl} alt="" />
      <div className="title">
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div className="description">
        <span>Description: </span>
        <span>{movie.description}</span>
      </div>
      <div className="genre">
        <span>Genre: </span>
        <span>{movie.genre}</span>
      </div>
      <div className="director">
        <span>Director: </span>
        <span>{movie.director}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    genre: PropTypes.string,
    description: PropTypes.string,
    director: PropTypes.string
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};