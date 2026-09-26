import MovieList from '../components/MovieList';

function Home() {
  return (
    <div className="page-shell">
      <div className="mb-4">
        <h1 className="mb-1">Movie Library</h1>
        <p className="hero-note mb-0">Browse movies, open details, search, and keep a personal watchlist.</p>
      </div>
      <MovieList />
    </div>
  );
}

export default Home;
