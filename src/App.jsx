import React from "react";
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
import Nav from "./components/Nav";
import Songs from "./data";

function App() {
  let [songs, setSongs] = React.useState(Songs());
  let [currentSong, setCurrentSong] = React.useState(songs[1]);
  let [isLibraryOpen, setIsLibraryOpen] = React.useState(false);
  let [isPlaying, setIsPlaying] = React.useState(false);
  const audioref = React.useRef(null);

  let libraryProps = {
    isLibraryOpen,
    setSongs,
    songs,
    setCurrentSong,
    audioref,
    isPlaying,
    setIsPlaying
  }

  return (
    <>
      <Nav setIsLibraryOpen={setIsLibraryOpen} isLibraryOpen={isLibraryOpen}/>
      <Library  {...libraryProps}/>
      <Song song={currentSong} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} song={currentSong} audioref={audioref} />
    </>
  );
}

export default App;
