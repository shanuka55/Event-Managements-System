import React from "react";
import Navbar from "../Components/Navbar.js";
import Upbar from "../Components/Upbar.js";
import HomeImage from "../Components/HomeImage.js";

const Home = () => {
  return (
    <div>
      <Upbar />
      <Navbar />
      <HomeImage />
    </div>
  );
};

export default Home;
