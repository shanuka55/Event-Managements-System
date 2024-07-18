import React from "react";
import Navbar from "../Components/Navbar.js";
import Upbar from "../Components/Upbar.js";
import HomeImage from "../Components/HomeImage.js";
import SearchEvent from "../Components/SearchEvent.js";
import UpComingevents from "../Components/UpComingevents.js";

const Home = () => {
  return (
    <div>
      <Upbar />
      <Navbar />
      <HomeImage />
      <SearchEvent />
      <UpComingevents />
    </div>
  );
};

export default Home;
