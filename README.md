# CYRO Movie Library App

A beginner-friendly React practical-exam project based on the supplied Movie Library outline.

## Main features

- React + JSX + CSS
- Bootstrap styling
- React Router navigation
- Redux store, actions, reducers and Redux Thunk
- Axios API service for OMDb
- Popular/latest movie listing
- Movie details page
- Movie search
- Loading and error handling
- Simple login/authentication
- Favorites / watchlist stored in Redux and localStorage
- Private route for the profile page
- Responsive movie-card layout inspired by the supplied CYRO.SE screenshot

## Run the project

```bash
npm install
npm run dev
```

Then open the localhost URL shown by Vite.

## Optional OMDb API

The project works with built-in sample data even without an API key.

To connect a real movie API:

1. Copy `.env.example` to `.env`
2. Put your OMDb key in:

```env
VITE_OMDB_API_KEY=8d3a936d

```

3. Restart the Vite server.

## Demo login

Enter any non-empty email and password on the Login page. The app keeps a small demo auth state in localStorage.

## Important files

- `src/main.jsx` - React entry point
- `src/App.jsx` - routes and page layout
- `src/redux/store.js` - Redux store
- `src/redux/moviesReducer.js` - movie state and actions
- `src/redux/authReducer.js` - login and favorites state
- `src/redux/movieActions.js` - Redux Thunk async actions
- `src/services/movieApi.js` - Axios API functions
- `src/components/MovieList.jsx` - movie grid
- `src/components/MovieDetails.jsx` - selected movie details
- `src/components/MovieSearch.jsx` - search form
- `src/components/Navbar.jsx` - navigation bar
