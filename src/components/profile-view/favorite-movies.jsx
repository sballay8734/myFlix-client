export const FavoriteMovies = ({ favoriteMovieList }) => {
  return (
    <div>
      <h2>Favorite Movies</h2>
      {favoriteMovieList.map((movie) => {
        return (
          <div key={movie.id}>
            <img src={movie.imgUrl} alt="" />
            <Link to={`/movies/${movie._id}`}><h4>{movie.title}</h4></Link>
            <Button variant="secondary" onClick={() => removeFav(movie._id)}>Remove from list</Button>
          </div>
          )
        })}
    </div>
  )
}