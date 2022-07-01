import React from "react";

function Player() {
  return (
    <div className="player">
      <div className="time-control">
        <p className="start-time"></p>
        <input type="range" />
        <p className="end-time"></p>
      </div>
      <div className="play-control">

        <span className="back">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13 5.9296875L6.9296875 12L13 18.070312L14.5 16.570312L9.9296875 12L14.5 7.4296875L13 5.9296875 z" />
          </svg>
        </span>
        <span className="play">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M8,5v14l11-7L8,5z" />
          </svg>
        </span>
        <span className="forward">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10 5.9296875L8.5 7.4296875L13.070312 12L8.5 16.570312L10 18.070312L16.070312 12L10 5.9296875 z" />
          </svg>
        </span>
        
      </div>
    </div>
  );
}

export default Player;
