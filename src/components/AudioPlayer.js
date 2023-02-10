import React, { useState } from "react";
import Sound from "react-sound";
import "./AudioPlayer.css";

const AudioPlayer = ({ src, title, img }) => {
  const [status, setStatus] = useState(Sound.status.STOPPED);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playing, setPlaying] = useState(false);

  const handleChange = (e) => {
    setPosition(e.target.value);
  };

  return (
    <div className="soundcloud-player">
      <Sound
        url={src}
        playStatus={status}
        position={position}
        onPlaying={({ position }) => setPosition(position)}
        onPause={() => setPosition(position)}
        onResume={() => setStatus(Sound.status.PLAYING)}
        onStop={() => setStatus(Sound.status.STOPPED)}
        onLoad={({ duration }) => setDuration(duration)}
      />
      <img src={img} alt="album cover" className="album-cover" />
      <div className="track-info">
        <h3 className="track-title">{title}</h3>
        <input
          className="slider"
          type="range"
          min={0}
          max={duration}
          value={position}
          onChange={handleChange}
        />
        <div className="controls">
          <button
            onClick={() => {
              setStatus(playing ? Sound.status.PAUSED : Sound.status.PLAYING);
              setPlaying(!playing);
            }}
          >
            <i className={playing ? "fa fa-pause" : "fa fa-play"}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
