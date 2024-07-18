import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home.js";
import Event from "./Routes/Event.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </>
  );
}

export default App;
