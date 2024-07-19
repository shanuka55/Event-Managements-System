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
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/event">EVENT</Link>
        </li>
        <li>
          <Link to="/CATEGORY">CATEGORY</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT US</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
