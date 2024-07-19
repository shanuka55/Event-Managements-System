import React from "react";
import "./Categories.css";

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
          <image />
        </div>
        <div className="card-item">
          <image />
        </div>
        <div className="card-item">
          <image />
        </div>
        <div className="card-item">
          <image />
        </div>
        <div className="card-item">
          <image />
        </div>
      </section>
    </div>
  );
};

export default Categories;
