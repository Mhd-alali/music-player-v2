import React from "react";
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
import Songs from "./data";

function App() {
  let [songs, setSongs] = React.useState(Songs());
  let [currentSong, setCurrentSong] = React.useState(songs[1]);
  const audioref = React.useRef(null);
  let [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <>
      <Library setSongs={setSongs} songs={songs} setCurrentSong={setCurrentSong} audioref={audioref} isPlaying={setIsPlaying} setIsPlaying={setIsPlaying} />
      <Song song={currentSong} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} song={currentSong} audioref={audioref} />
    </>
  );
}

export default App;
