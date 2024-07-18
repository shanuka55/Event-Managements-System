import React, { useState } from "react";
import "../Components/Navbar.css";
import { Link } from "react-router-dom";
import Upbar from "./Upbar";

const Navbar = () => {
  const [color, setcolor] = useState(false);

  const changeColor = () => {
    if (window.screenY >= 100) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/" className="name">
        <h1>
          <span className="span">SOFTEDGELAB</span> EVENT
        </h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
