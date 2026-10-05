function MovieItem({ movie, isFavorite, onToggleFavorite, onViewDetails }) {
  return (
    <div className="movie-card compact-row">
      <div className="movie-info compact-info">
        <span className="movie-title">{movie.title}</span>
        <span>{movie.genre}</span>
        <span>{movie.year}</span>
        <span>⭐ {movie.rating}</span>
      </div>
      <div className="movie-actions compact-actions">
        <button className={isFavorite ? 'favorite active' : 'favorite'} onClick={() => onToggleFavorite(movie.id)}>
          {isFavorite ? '★' : '☆'}
        </button>
        <button onClick={() => onViewDetails(movie)}>View Details</button>
      </div>
    </div>
  );
}
export default MovieItem;
