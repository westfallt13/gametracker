function GameCard({ game, onDelete }) {
  return (
    <div className="game-card">
      <h3>{game.title}</h3>
      <p><strong>Genre:</strong> {game.genre}</p>
      <p><strong>Rating:</strong> {"⭐".repeat(game.rating)}</p>
      <button className="delete-btn" onClick={() => onDelete(game.id)}>
        Delete
      </button>
    </div>
  );
}

export default GameCard;
