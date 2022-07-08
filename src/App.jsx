import React from "react";
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
import Songs from "./data";

function App() {
  let [songs, setSongs] = React.useState(Songs());
  let [currentSong, setCurrentSong] = React.useState(songs[1]);

  return (
    <>
      <Library songs={songs} setCurrentSong={setCurrentSong}/>
      <Song song={currentSong} />
      <Player song={currentSong} />
    </>
  );
}

export default App;
