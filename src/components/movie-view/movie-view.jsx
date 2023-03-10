import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
      <Button variant="primary" onClick={onBackClick}>Back</Button>
    </div>
  );
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imgUrl: PropTypes.string,
    genre: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string
    }),
    description: PropTypes.string,
    director: PropTypes.shape({
      bio: PropTypes.string,
      birth: PropTypes.string,
      death: PropTypes.string,
      name: PropTypes.string
    })
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};