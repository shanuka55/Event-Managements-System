import React from "react";
import "./HomeImage.css";
import homeImage from "../Assets/home-img-01.jpg";

const HomeImage = () => {
  return (
    <div className="home-img-container">
      <img src={homeImage} alt="homeImage" />
    </div>
  );
};

export default HomeImage;
