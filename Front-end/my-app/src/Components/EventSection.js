import React from "react";
import "./EventSection.css";

const EventSection = () => {
  return (
    <div className="Event-section">
      <section className="add-event">
        <div className="event-header"></div>
        <h3>Add Event</h3>
      </section>
      <div className="main">
        <div className="input-container">
          <input
            type="text"
            name="text"
            className="event-input"
            placeholder="EVENT NAME"
          />
          <input
            type="text"
            name="text"
            className="event-input"
            placeholder="DESCRIPTION"
          />
          <input
            type="date"
            name="text"
            className="event-input"
            placeholder="DATE"
          />
          <input
            type="time"
            name="text"
            className="event-input"
            placeholder="TIME"
          />
          <input
            type="text"
            name="text"
            className="event-input"
            placeholder="LOCATION"
          />
        </div>
        <button className="event-btn">ADD EVENT</button>
      </div>

      <section className="update-event">
        <div className="event-header"></div>
        <h3>update Event</h3>
      </section>
      <div className="main">
        <div className="serch-container">
          <input
            type="search"
            name="text"
            className="event-input"
            placeholder="SEARCH..."
          />
          <button className="event-btn">Serch</button>
        </div>
        <div className="input-update-container">
          <input
            type="text"
            name="text"
            className="event-input"
            placeholder="EVENT NAME"
          />
          <input
            type="text"
            name="text"
            className="event-input"
            placeholder="DESCRIPTION"
          />
          <input
            type="date"
            name="text"
            className="event-input"
            placeholder="DATE"
          />
          <input
            type="time"
            name="text"
            className="event-input"
            placeholder="TIME"
          />
          <input
            type="text"
            name="text"
            className="event-input"
            placeholder="LOCATION"
          />
        </div>
        <button className="event-btn">UPDATE EVENT</button>
      </div>

      <section className="delete-event">
        <div className="event-header"></div>
        <h3>delete Event</h3>
      </section>
      <div className="main"></div>
    </div>
  );
};

export default EventSection;
