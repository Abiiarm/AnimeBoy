"use client";

import { useState } from "react";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button onClick={handleVideoPlayer} className="float-right mb-1 bg-color-secondary px-3 text-color-primary">
          X
        </button>
        <Youtube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={option} onError={() => alert("Video is broken, please try another.")} />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button onClick={handleVideoPlayer} className="fixed bottom-5 right-5 w-32 rounded bg-color-primary text-xl text-color-dark shadow-xl transition-all hover:bg-color-orange">
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
