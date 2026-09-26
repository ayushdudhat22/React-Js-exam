import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/authActions';
import MoviePoster from './MoviePoster';

function MovieDetails({ movie }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.auth.favorites);
  const isFavorite = favorites.some((item) => item.id === movie.id);

  return (
    <div className="details-panel">
      <div className="row g-4 align-items-start">
        <div className="col-md-4">
          <MoviePoster movie={movie} large />
        </div>

        <div className="col-md-8">
          <p className="text-danger fw-bold mb-1">MOVIE DETAILS</p>
          <h1>{movie.title}</h1>
          <p className="text-secondary">{movie.year} • {movie.genre} • {movie.language}</p>

          <div className="mb-3">
            <strong>Rating:</strong> ⭐ {movie.rating}
          </div>

          <p>{movie.description}</p>

          <p>
            <strong>Release Date:</strong> {movie.releaseDate}
          </p>

          <p>
            <strong>Cast:</strong> {movie.cast}
          </p>

          <div className="d-flex gap-2 mt-4">
            <button
              className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-danger'}`}
              onClick={() => dispatch(toggleFavorite(movie))}
            >
              {isFavorite ? 'Remove from Watchlist' : 'Add to Watchlist'}
            </button>
            <Link className="btn btn-dark" to="/">Back to Movies</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
