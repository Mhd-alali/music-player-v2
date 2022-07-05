import React from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import Songs from "./data";

function App() {
  let [songs, setSongs] = React.useState(Songs());
  let [currentSong, setCurrentSong] = React.useState(songs[0]);

  return (
    <>
      <Song song={currentSong}/>
      <Player song={currentSong}/>
    </>
  );
}

export default App;
