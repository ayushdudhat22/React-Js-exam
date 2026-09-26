function MoviePoster({ movie, large = false }) {
  const posterStyle = movie.poster && movie.poster !== 'N/A'
    ? {
        backgroundImage: `url(${movie.poster})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : { background: movie.accent || 'linear-gradient(145deg, #555, #111)' };

  return (
    <div className={`poster ${large ? 'details-poster' : ''}`} style={posterStyle}>
      {(!movie.poster || movie.poster === 'N/A') && (
        <>
          <span className="poster-small">CYRO MOVIES</span>
          <span className="poster-title">{movie.title}</span>
          <span className="poster-year">{movie.year}</span>
        </>
      )}
    </div>
  );
}

export default MoviePoster;
