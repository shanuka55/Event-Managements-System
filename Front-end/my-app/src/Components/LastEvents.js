import React from "react";
import "./LastEvents.css";
import music from "../Assets/music.jpg";

const LastEvents = () => {
  return (
    <div className="lastEvent">
      <div className="lastEvent-heading">
        <div></div>
        <h1>Last Events</h1>
        <button className="btn-shine">
          <span>see all Events</span>
        </button>
      </div>

      <div className="latest-grid">
        <a>
          <img src={music} alt="music" />
          <div className="event-time">
            <span>8</span>
            <span>June</span>
            <span>2024</span>
          </div>
        </a>
        <div className="event-info">
          <h4>Promotional event</h4>
          <ul>
            <li>8 Jun,2024</li>
            <li>16.00 pm</li>
          </ul>
          <p>dcdcdcdcdcdcsz cdcdcdc dcdcd</p>
          <p>Event has expired.</p>
        </div>
      </div>
      <div className="latest-grid">
        <a>
          <img src={music} alt="music" />
          <div className="event-time">
            <span>8</span>
            <span>June</span>
            <span>2024</span>
          </div>
        </a>
        <div className="event-info">
          <h4>Promotional event</h4>
          <ul>
            <li>8 Jun,2024</li>
            <li>16.00 pm</li>
          </ul>
          <p>dcdcdcdcdcdcsz cdcdcdc dcdcd</p>
          <p>Event has expired.</p>
        </div>
      </div>
      <div className="latest-grid">
        <a>
          <img src={music} alt="music" />
          <div className="event-time">
            <span>8</span>
            <span>June</span>
            <span>2024</span>
          </div>
        </a>
        <div className="event-info">
          <h4>Promotional event</h4>
          <ul>
            <li>8 Jun,2024</li>
            <li>16.00 pm</li>
          </ul>
          <p>dcdcdcdcdcdcsz cdcdcdc dcdcd</p>
          <p>Event has expired.</p>
        </div>
      </div>
    </div>
  );
};

export default LastEvents;
