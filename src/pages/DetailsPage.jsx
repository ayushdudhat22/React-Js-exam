import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../redux/movieActions';
import MovieDetails from '../components/MovieDetails';

function DetailsPage() {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { selectedMovie, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  const initialMovie = location.state?.movie;
  const movie = selectedMovie || initialMovie;

  return (
    <div className="page-shell">
      {loading && <div className="status-box">Loading movie details...</div>}
      {error && <div className="alert alert-warning">{error}</div>}
      {!loading && movie && <MovieDetails movie={movie} />}
      {!loading && !movie && (
        <div className="status-box">
          <p className="mb-3">Movie details are not available.</p>
          <Link className="btn btn-danger" to="/">Go back</Link>
        </div>
      )}
    </div>
  );
}

export default DetailsPage;
