import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../redux/movieActions';
import MovieCard from './MovieCard';

function MovieList() {
  const dispatch = useDispatch();
  const { popularMovies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <section>
      <div className="d-flex justify-content-between align-items-end mb-3">
        <div>
          <h2 className="mb-1">Latest Movies</h2>
          <div className="hero-note">A simple poster grid inspired by the supplied CYRO.SE reference.</div>
        </div>
      </div>

      {error && (
        <div className="alert alert-warning" role="alert">
          {error}
        </div>
      )}

      {loading && <div className="status-box">Loading movies...</div>}

      {!loading && popularMovies.length === 0 && (
        <div className="status-box">No movies available.</div>
      )}

      <div className="movie-grid">
        {popularMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default MovieList;
