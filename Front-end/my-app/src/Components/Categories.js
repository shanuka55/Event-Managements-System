import React from "react";
import "./Categories.css";
import music from "../Assets/music.jpg";
import learning from "../Assets/learning.jpg";
import food from "../Assets/food.jpg";
import festival from "../Assets/festival.jpg";
import event from "../Assets/event-promotion.png";

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories-heading">
        <div></div>
        <h1>Events by categories</h1>
        <button className="btn-shine">
          <span>see all categories</span>
        </button>
      </div>

      <section className="card-container">
        <div className="card-item">
          <h4>Music</h4>
          <img src={music} alt="music" />
          <div className="card-mask"></div>
        </div>
        <div className="card-item">
          <h4>festival</h4>
          <img src={festival} alt="festival" />
          <div className="card-mask"></div>
        </div>
        <div className="card-item">
          <h4>food & drinks</h4>
          <img src={food} alt="food" />
          <div className="card-mask"></div>
        </div>
        <div className="card-item">
          <h4>learning</h4>
          <img src={learning} alt="learning" />
          <div className="card-mask"></div>
        </div>
        <div className="card-item">
          <h4>promotional</h4>
          <img src={event} alt="event" />
          <div className="card-mask"></div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
