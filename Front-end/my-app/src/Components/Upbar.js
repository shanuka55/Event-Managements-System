import React from "react";
import { Link } from "react-router-dom";
import "./Upbar.css";
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";

const Upbar = () => {
  return (
    <div className="upbar-container">
      <section className="upbar-hero-1">
        <IoMdCall className="upbar-i" />
        <h4>+94 6464869</h4>
        <IoMail className="upbar-i" />
        <h4>Event@gmail.com</h4>
      </section>
      <section className="upbar-hero-2">
        <ul className="bar-menu">
          <li>
            <Link to="/">LOG IN</Link>
          </li>
          <li>
            <Link to="/">SIGN UP</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Upbar;
