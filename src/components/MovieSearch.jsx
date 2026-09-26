import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies, setSearchQuery } from '../redux/movieActions';
import MovieCard from './MovieCard';

function MovieSearch() {
  const dispatch = useDispatch();
  const { searchQuery, searchResults, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    if (searchQuery) {
      dispatch(searchMovies(searchQuery));
    }
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchMovies(searchQuery));
  };

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(setSearchQuery(value));

    if (!value.trim()) {
      dispatch(searchMovies(''));
    }
  };

  return (
    <section>
      <h1 className="mb-2">Movie Search</h1>
      <p className="hero-note mb-4">Type a movie name and search the API or the built-in demo data.</p>

      <form onSubmit={handleSubmit} className="search-box mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={handleChange}
          />
          <button className="btn btn-danger" type="submit">Search</button>
        </div>
      </form>

      {error && <div className="alert alert-warning">{error}</div>}
      {loading && <div className="status-box mb-4">Searching...</div>}

      {!loading && searchResults.length > 0 && (
        <div className="movie-grid">
          {searchResults.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}

      {!loading && searchQuery && searchResults.length === 0 && (
        <div className="status-box">No movie found for “{searchQuery}”.</div>
      )}
    </section>
  );
}

export default MovieSearch;
