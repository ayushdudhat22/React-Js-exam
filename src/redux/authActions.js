export const loginUser = (email) => ({
  type: 'LOGIN_SUCCESS',
  payload: {
    email,
    name: email.split('@')[0],
  },
});

export const logoutUser = () => ({
  type: 'LOGOUT',
});

export const toggleFavorite = (movie) => ({
  type: 'TOGGLE_FAVORITE',
  payload: movie,
});
