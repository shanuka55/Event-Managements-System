import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home.js";
import Event from "./Routes/Event.js";
import Category from "./Routes/Category.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/category" element={<Category />} />
        <Route path="/contact" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
