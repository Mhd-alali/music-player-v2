import React, { useEffect } from "react";
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
import Nav from "./components/Nav";
import Songs from "./data";

function App() {
  let [songs, setSongs] = React.useState(Songs());
  let [currentSong, setCurrentSong] = React.useState(songs[0]);
  let [isLibraryOpen, setIsLibraryOpen] = React.useState(false);
  let [isPlaying, setIsPlaying] = React.useState(false);
  const audioref = React.useRef(null);
  
  useEffect(()=>{
    console.log("done");
    const newSongs = songs.map((s) => {
      if (s.id === currentSong.id) {
        return {
          ...s,
          active: true
        }
      }
      else {
        return {
          ...s,
          active: false
        }
      }
    })
  
    setSongs(newSongs)

  },[currentSong])

  let libraryProps = {
    isLibraryOpen,
    songs,
    setCurrentSong,
    audioref,
    isPlaying,
    setIsPlaying
  }

  let playerProps={
    songs,
    currentSong,
    setCurrentSong,
    isPlaying,
    setIsPlaying,
    audioref
  }

  return (
    <>
      <div className={`transition duration-300 px-2 md:p-0 ${isLibraryOpen?"translate-x-40":"translate-x-0"}`}>
        <Nav setIsLibraryOpen={setIsLibraryOpen} isLibraryOpen={isLibraryOpen}/>
        <Song song={currentSong} />
        <Player {...playerProps}/>
      </div>
      <Library  {...libraryProps}/>
    </>
  );
}

export default App;
