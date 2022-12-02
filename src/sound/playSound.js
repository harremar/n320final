import useSound from "use-sound"; //importing use of sound
import musicSound from "./music.mp3"; //importing music
import "./playSound.css"; //importing styles

//creating BoopButton function
const BoopButton = () => {
  const [play] = useSound(musicSound); //getting the music.mp3
  console.log(play);
  //return button that plays the song
  return (
    <div>
      <p>Listen to theme song!</p>
      {/* creating the auto button */}
      <audio
        controls
        id="audio"
        autoPlay
        loop
        play="true"
        src={musicSound}
      ></audio>
    </div>
  );
};

//exporting the Music
export default BoopButton;
