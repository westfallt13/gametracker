import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/components/Navbar";
import HomePage from "./pages/HomePage";
import AddGamePage from "./pages/AddGamePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddGamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
