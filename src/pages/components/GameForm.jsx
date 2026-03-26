import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addGame } from "../services/gamesService";

function GameForm() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addGame({ title, genre, rating: Number(rating) });
    navigate("/");
  };

  return (
    <form className="game-form" onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Genre
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
      </label>
      <label>
        Rating (1–5)
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
      </label>
      <button type="submit">Save Game</button>
    </form>
  );
}

export default GameForm;
