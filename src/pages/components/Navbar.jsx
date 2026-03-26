import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-brand">GameTracker</h2>
      <div className="navbar-links">
        <Link to="/">My Games</Link>
        <Link to="/add">Add Game</Link>
      </div>
    </nav>
  );
}

export default Navbar;
