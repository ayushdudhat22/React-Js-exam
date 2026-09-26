const initialState = {
  popularMovies: [],
  searchResults: [],
  selectedMovie: null,
  loading: false,
  error: '',
  searchQuery: '',
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_REQUEST':
      return { ...state, loading: true, error: '' };

    case 'FETCH_MOVIES_SUCCESS':
      return { ...state, loading: false, popularMovies: action.payload };

    case 'FETCH_MOVIES_FAILURE':
      return { ...state, loading: false, error: action.payload };

    case 'SEARCH_MOVIES_REQUEST':
      return { ...state, loading: true, error: '' };

    case 'SEARCH_MOVIES_SUCCESS':
      return { ...state, loading: false, searchResults: action.payload };

    case 'SEARCH_MOVIES_FAILURE':
      return { ...state, loading: false, error: action.payload, searchResults: [] };

    case 'FETCH_DETAILS_REQUEST':
      return { ...state, loading: true, error: '', selectedMovie: null };

    case 'FETCH_DETAILS_SUCCESS':
      return { ...state, loading: false, selectedMovie: action.payload };

    case 'FETCH_DETAILS_FAILURE':
      return { ...state, loading: false, error: action.payload };

    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };

    default:
      return state;
  }
};
