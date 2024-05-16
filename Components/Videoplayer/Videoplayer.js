import React, { useRef } from "react";
import "./Videoplayer.css";
import video from "../../Assets/video.mp4";

function Videoplayer({ play, setPlay }) {
  const player = useRef(null);
  const closeplayer = (e) => {
    if (e.target === player.current) {
      setPlay(false);
    }
  };
  return (
    <div
      className={`video-player ${play ? "" : "hide"}`}
      ref={player}
      onClick={closeplayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
}

export default Videoplayer;
