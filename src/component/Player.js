import { useEffect, useState } from "react"; 
import useSound from "use-sound"; // for handling the sound
import qala from "../assets/LoveMeOrLeaveMe.wav"; // importing the music
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customazing the icons

export default function Player() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(qala);
  
  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };
  
  return (
  <div className="component">
    <h2>Music Player</h2>
    <img
      className="musicCover"
      src="https://picsum.photos/200/200"
    />
    <div>
      <h3 className="title">Andreas Blachere</h3>
      <p className="subTitle">Love Me Or Leave Me Alone</p>
    </div>
    <div>
      <button className="playButton">
        <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
          <BiSkipPrevious />
        </IconContext.Provider>
      </button>
      {!isPlaying ? (
        <button className="playButton" onClick={playingButton}>
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <AiFillPlayCircle />
          </IconContext.Provider>
        </button>
      ) : (
        <button className="playButton" onClick={playingButton}>
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <AiFillPauseCircle />
          </IconContext.Provider>
        </button>
      )}
      <button className="playButton">
        <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
          <BiSkipNext />
        </IconContext.Provider>
      </button>
    </div>
  </div>
) ;
}