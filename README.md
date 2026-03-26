# GameTracker

A web application for registering and displaying your favorite video games. Built with React + Vite, it uses the Supabase REST API for data persistence and React Router DOM for client-side navigation.

## Features

- **My Games** — View all saved games in a responsive card grid with title, genre, and star rating
- **Add Game** — Submit a form to save a new game to the database
- **Delete** — Remove any game directly from its card
- **Navigation** — Persistent navbar linking both pages

## Tech Stack

- [React](https://react.dev/) — UI components and state management
- [Vite](https://vite.dev/) — Development server and build tool
- [React Router DOM](https://reactrouter.com/) — Client-side routing
- [Supabase](https://supabase.com/) — PostgreSQL database via REST API

## Project Structure

```
src/
├── pages/
│   ├── HomePage.jsx          # "/" — lists all games
│   ├── AddGamePage.jsx       # "/add" — form to add a game
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── GameCard.jsx      # Individual game card
│   │   └── GameForm.jsx      # Controlled add-game form
│   └── services/
│       └── gamesService.js   # All Supabase fetch calls
├── App.jsx                   # Route configuration
└── main.jsx                  # App entry point
```

## Supabase Setup

1. Create a project at [supabase.com](https://supabase.com/)
2. In the **Table Editor**, create a table called `games` with the following columns:

| Column | Type | Notes |
|---|---|---|
| `id` | int8 | Primary key, auto-increment |
| `title` | text | Game title |
| `genre` | text | Genre (e.g. Action, RPG) |
| `rating` | int4 | Score from 1 to 5 |
| `created_at` | timestamptz | Default: `now()` |

3. Under **Project Settings → API**, copy your **Project URL** and **anon public** key.

## Running Locally

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- A Supabase project with the `games` table created (see above)

### Steps

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd gametracker
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the project root:

   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

   Replace the values with your actual Supabase Project URL and anon key.

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

### Other Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
