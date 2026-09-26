import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

function Favorites() {
  const favorites = useSelector((state) => state.auth.favorites);

  return (
    <div className="page-shell">
      <h1 className="mb-2">My Watchlist</h1>
      <p className="hero-note mb-4">Movies you saved in Redux and localStorage.</p>

      {favorites.length === 0 ? (
        <div className="status-box">Your watchlist is empty. Add a movie from the home page.</div>
      ) : (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
