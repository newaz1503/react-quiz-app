import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import Classes from "../styles/MiniPlayer.module.css";
function MiniPlayer({ id, title }) {
  const buttonRef = useRef();
  const [videoPlayer, setVideoPlayer] = useState(false);
  const videoURL = `https://www.youtube.com/watch?v=${id}`;
  function togglePalyer() {
    if (!videoPlayer) {
      buttonRef.current.classList.remove(Classes.floatingBtn);
      setVideoPlayer(true);
    } else {
      buttonRef.current.classList.add(Classes.floatingBtn);
      setVideoPlayer(false);
    }
  }
  return (
    <div
      className={`${Classes.miniPlayer} ${Classes.floatingBtn}`}
      ref={buttonRef}
      onClick={togglePalyer}
    >
      <span className={`material-icons-outlined ${Classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined  ${Classes.close}`}
        onClick={togglePalyer}
      >
        {" "}
        close{" "}
      </span>
      <ReactPlayer
        className={Classes.player}
        url={videoURL}
        width="300px"
        height="168px"
        playing={videoPlayer}
        controls
      />
      <p>{title}</p>
    </div>
  );
}

export default MiniPlayer;
