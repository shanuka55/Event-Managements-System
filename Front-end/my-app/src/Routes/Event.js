import React from "react";
import EventSection from "../Components/EventSection";
import Upbar from "../Components/Upbar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Event = () => {
  return (
    <div>
      <Upbar />
      <Navbar />
      <EventSection />
      <Footer />
    </div>
  );
};

export default Event;
