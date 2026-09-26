import axios from 'axios';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_URL = 'https://www.omdbapi.com/';

const api = axios.create({
  baseURL: API_URL,
});

export const hasApiKey = Boolean(API_KEY);

export async function getPopularMovies() {
  if (!API_KEY) {
    throw new Error('NO_API_KEY');
  }

  const response = await api.get('', {
    params: {
      apikey: API_KEY,
      s: 'avengers',
      type: 'movie',
      page: 1,
    },
  });

  if (response.data.Response === 'False') {
    throw new Error(response.data.Error || 'Movies could not be loaded.');
  }

  return response.data.Search || [];
}

export async function searchMoviesApi(query) {
  if (!API_KEY) {
    throw new Error('NO_API_KEY');
  }

  const response = await api.get('', {
    params: {
      apikey: API_KEY,
      s: query,
      type: 'movie',
      page: 1,
    },
  });

  if (response.data.Response === 'False') {
    throw new Error(response.data.Error || 'No movie found.');
  }

  return response.data.Search || [];
}

export async function getMovieDetailsApi(id) {
  if (!API_KEY) {
    throw new Error('NO_API_KEY');
  }

  const response = await api.get('', {
    params: {
      apikey: API_KEY,
      i: id,
      plot: 'full',
    },
  });

  if (response.data.Response === 'False') {
    throw new Error(response.data.Error || 'Movie details could not be loaded.');
  }

  return response.data;
}
