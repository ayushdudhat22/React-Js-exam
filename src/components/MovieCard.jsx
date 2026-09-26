import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/authActions';
import MoviePoster from './MoviePoster';

function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.auth.favorites);
  const isFavorite = favorites.some((item) => item.id === movie.id);

  const handleFavorite = (event) => {
    event.preventDefault();
    dispatch(toggleFavorite(movie));
  };

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`} state={{ movie }}>
        <MoviePoster movie={movie} />
      </Link>

      <div className="movie-card-body">
        <div className="d-flex justify-content-between gap-2">
          <Link to={`/movie/${movie.id}`} state={{ movie }}>
            <div className="movie-title">{movie.title}</div>
          </Link>
          <button
            type="button"
            className={`btn btn-sm ${isFavorite ? 'btn-danger' : 'btn-outline-dark'}`}
            onClick={handleFavorite}
            title="Add to watchlist"
          >
            {isFavorite ? '♥' : '♡'}
          </button>
        </div>
        <div className="movie-meta">
          {movie.year} • {movie.genre} • ⭐ {movie.rating}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
