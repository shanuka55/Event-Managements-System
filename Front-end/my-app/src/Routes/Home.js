import React from "react";
import Navbar from "../Components/Navbar.js";
import Upbar from "../Components/Upbar.js";
import HomeImage from "../Components/HomeImage.js";
import SearchEvent from "../Components/SearchEvent.js";
import UpComingevents from "../Components/UpComingevents.js";
import Categories from "../Components/Categories.js";
import LastEvents from "../Components/LastEvents.js";
import Footer from "../Components/Footer.js";

const Home = () => {
  return (
    <div>
      <Upbar />
      <Navbar />
      <HomeImage />
      <SearchEvent />
      <UpComingevents />
      <Categories />
      <LastEvents />
      <Footer />
    </div>
  );
};

export default Home;
