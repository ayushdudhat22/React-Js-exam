import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { movieReducer } from './moviesReducer';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
