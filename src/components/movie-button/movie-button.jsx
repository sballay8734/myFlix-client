import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './movie-button.scss';

export const MovieButton = ({ movie }) => {
  return (
    <Card className="movie-card h-100">
      <Card.Img src={movie.imgUrl} id="button-image" />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director.name}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`} >
          <Button className="open-button">Open</Button>
        </Link>
      </Card.Body>
    </Card>
  )
};


// prop constraints
// MovieButton.propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string,
//     imgUrl: PropTypes.string,
//     description: PropTypes.string,
//     director: PropTypes.shape({
//       name: PropTypes.string
//     })
//   }).isRequired,
//   onMovieClick: PropTypes.func.isRequired
// };