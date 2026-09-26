const savedUser = localStorage.getItem('movie_user');
const savedFavorites = JSON.parse(localStorage.getItem('movie_favorites') || '[]');

const initialState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  favorites: savedFavorites,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem('movie_user', JSON.stringify(action.payload));
      return { ...state, user: action.payload };

    case 'LOGOUT':
      localStorage.removeItem('movie_user');
      return { ...state, user: null };

    case 'TOGGLE_FAVORITE': {
      const exists = state.favorites.some((movie) => movie.id === action.payload.id);
      const favorites = exists
        ? state.favorites.filter((movie) => movie.id !== action.payload.id)
        : [...state.favorites, action.payload];

      localStorage.setItem('movie_favorites', JSON.stringify(favorites));
      return { ...state, favorites };
    }

    default:
      return state;
  }
};
