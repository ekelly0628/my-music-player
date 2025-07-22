import React from "react";

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
}

function Slider({ currentTime, duration, onChange }) {
  // Calculate remaining time
  const remainingTime = duration - currentTime;

  return (
    <div className="c-player--slider-container">
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={(e) => onChange(Number(e.target.value))}
        className="c-player--slider"
      />
      <div className="c-player--time-display">
        <span className="remaining-time">{formatTime(remainingTime)}</span>
      </div>
    </div>
  );
}

export default Slider;