import React from "react";

function LibrarySong({ songs, song, setCurrentSong, audioref, isPlaying, setSongs }) {
  async function songSelectHandler() {
    const selectedSong = songs.indexOf(song)
    await setCurrentSong(songs[selectedSong])

    const newSongs = songs.map((s) => {
      if (s.id === song.id) {
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

    if (!!isPlaying) {
      audioref.current.play();
    }
  }


  return (
    <div className={`flex px-8 py-4 gap-2 cursor-pointer transition-all hover:bg-[hsl(267,68%,90%)] ${song.active ? "bg-[hsl(267,68%,80%)]" : ""}`} onClick={songSelectHandler}>
      <img className="w-1/3" src={song.cover} alt={song.name} />
      <div className="flex flex-col ">
        <h3 className="text-gray-700 text-lg font-bold">{song.name}</h3>
        <h4 className="text-gray-600">{song.artist}</h4>
      </div>
    </div>
  );
}

function Library({ songs, setCurrentSong, audioref, isPlaying, setSongs, isLibraryOpen }) {

  return (
    <>
      <div className={`absolute top-0 h-screen shadow-lg overflow-auto transition-all duration-300 bg-[hsl(0,0%,95%)] w-80 ${isLibraryOpen ? "-left-80 opacity-0" : "opacity-100 left-0"} `}>
        <h2 className="px-8 pt-4 text-xl ">Library</h2>
        <div className="mt-4">
          {songs.map((song) => (
            <LibrarySong key={song.id} songs={songs} song={song} setCurrentSong={setCurrentSong} audioref={audioref} isPlaying={isPlaying} setSongs={setSongs} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Library;
