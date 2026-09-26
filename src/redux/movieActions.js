import { getMovieDetailsApi, getPopularMovies, searchMoviesApi } from '../services/movieApi';
import { sampleMovies } from '../utils/movieData';

function messageFromError(error) {
  if (error.message === 'NO_API_KEY') {
    return 'OMDb API key not added. Showing built-in demo movie data.';
  }

  return error.message || 'Something went wrong while loading movies.';
}

export const fetchPopularMovies = () => async (dispatch) => {
  dispatch({ type: 'FETCH_MOVIES_REQUEST' });

  try {
    const apiMovies = await getPopularMovies();
    const mappedMovies = apiMovies.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      genre: 'Movie',
      language: 'English',
      rating: 'N/A',
      releaseDate: movie.Year,
      description: 'Open the details page to load full information from the movie API.',
      cast: 'API data',
      poster: movie.Poster,
    }));

    dispatch({ type: 'FETCH_MOVIES_SUCCESS', payload: mappedMovies });
  } catch (error) {
    dispatch({ type: 'FETCH_MOVIES_SUCCESS', payload: sampleMovies });
    dispatch({ type: 'FETCH_MOVIES_FAILURE', payload: messageFromError(error) });
  }
};

export const searchMovies = (query) => async (dispatch) => {
  dispatch({ type: 'SEARCH_MOVIES_REQUEST' });

  if (!query.trim()) {
    dispatch({ type: 'SEARCH_MOVIES_SUCCESS', payload: sampleMovies });
    return;
  }

  try {
    const apiMovies = await searchMoviesApi(query.trim());
    const mappedMovies = apiMovies.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      genre: 'Movie',
      language: 'English',
      rating: 'N/A',
      releaseDate: movie.Year,
      description: 'Open the details page to load full information from the movie API.',
      cast: 'API data',
      poster: movie.Poster,
    }));

    dispatch({ type: 'SEARCH_MOVIES_SUCCESS', payload: mappedMovies });
  } catch (error) {
    const localResults = sampleMovies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );

    dispatch({ type: 'SEARCH_MOVIES_SUCCESS', payload: localResults });
    dispatch({ type: 'SEARCH_MOVIES_FAILURE', payload: messageFromError(error) });
  }
};

export const fetchMovieDetails = (id) => async (dispatch) => {
  dispatch({ type: 'FETCH_DETAILS_REQUEST' });

  try {
    const localMovie = sampleMovies.find((movie) => movie.id === id);

    if (localMovie) {
      dispatch({ type: 'FETCH_DETAILS_SUCCESS', payload: localMovie });
      return;
    }

    const apiMovie = await getMovieDetailsApi(id);
    const movie = {
      id: apiMovie.imdbID,
      title: apiMovie.Title,
      year: apiMovie.Year,
      genre: apiMovie.Genre,
      language: apiMovie.Language,
      rating: apiMovie.imdbRating,
      releaseDate: apiMovie.Released,
      description: apiMovie.Plot,
      cast: apiMovie.Actors,
      poster: apiMovie.Poster,
    };

    dispatch({ type: 'FETCH_DETAILS_SUCCESS', payload: movie });
  } catch (error) {
    dispatch({ type: 'FETCH_DETAILS_FAILURE', payload: messageFromError(error) });
  }
};

export const setSearchQuery = (query) => ({
  type: 'SET_SEARCH_QUERY',
  payload: query,
});
