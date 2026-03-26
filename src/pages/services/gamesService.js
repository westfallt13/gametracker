const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const GAMES_URL = `${SUPABASE_URL}/rest/v1/games`;

const headers = {
  apikey: SUPABASE_ANON_KEY,
  Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
  "Content-Type": "application/json",
};

export async function getGames() {
  const response = await fetch(`${GAMES_URL}?select=*`, {
    headers,
  });
  if (!response.ok) throw new Error("Failed to fetch games");
  return response.json();
}

export async function addGame(game) {
  const response = await fetch(GAMES_URL, {
    method: "POST",
    headers: { ...headers, Prefer: "return=representation" },
    body: JSON.stringify(game),
  });
  if (!response.ok) throw new Error("Failed to add game");
  return response.json();
}

export async function deleteGame(id) {
  const response = await fetch(`${GAMES_URL}?id=eq.${id}`, {
    method: "DELETE",
    headers,
  });
  if (!response.ok) throw new Error("Failed to delete game");
}
