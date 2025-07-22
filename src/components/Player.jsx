import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails.jsx";
import PlayerControls from "./PlayerControls.jsx";
import Slider from "./Slider.jsx";

function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    }
  }, [props.currentSongIndex]);

  const onLoadedMetadata = () => {
    setDuration(audioEl.current.duration);
  };

  const onTimeUpdate = () => {
    setCurrentTime(audioEl.current.currentTime);
  };

  const handleSliderChange = (value) => {
    audioEl.current.currentTime = value;
    setCurrentTime(value);
  };

  const SkipSong = (forwards = true) => {
    if (!forwards && audioEl.current.currentTime > 3) {
      // Restart current song if more than 3 seconds have played
      audioEl.current.currentTime = 0;
      setCurrentTime(0);
      return;
    }

    props.setCurrentSongIndex(() => {
      let temp = props.currentSongIndex;
      temp = forwards ? temp + 1 : temp - 1;

      if (temp > props.songs.length - 1) temp = 0;
      if (temp < 0) temp = props.songs.length - 1;

      return temp;
    });
  };

  return (
    <div className="c-player">
      <audio
        key={props.currentSongIndex} 
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        onEnded={() => {
          SkipSong(true);
          setIsPlaying(true);
        }}
      ></audio>
      <h4>Playing now</h4>
      <PlayerDetails song={props.songs[props.currentSongIndex]} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />

      <Slider
        currentTime={currentTime}
        duration={duration}
        onChange={handleSliderChange}
      />

      <p>
        <strong>Next up: </strong>
        <span>
          {props.songs[props.nextSongIndex].title} by{" "}
          {props.songs[props.nextSongIndex].artist}
        </span>
      </p>
    </div>
  );
}

export default Player;