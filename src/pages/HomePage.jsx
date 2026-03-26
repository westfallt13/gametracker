import { useState, useEffect } from "react";
import { getGames, deleteGame } from "./services/gamesService";
import GameCard from "./components/GameCard";

function HomePage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  async function fetchGames() {
    const data = await getGames();
    setGames(data);
  }

  async function handleDelete(id) {
    await deleteGame(id);
    setGames(games.filter((game) => game.id !== id));
  }

  return (
    <div className="home-page">
      <h1>My Games</h1>
      {games.length === 0 ? (
        <p>No games yet. Add one!</p>
      ) : (
        <div className="games-grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
