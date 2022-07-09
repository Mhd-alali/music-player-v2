import React from "react";

function LibrarySong({ songs, song, setCurrentSong, audioref, isPlaying}) {
  function songSelectHandler() {
    const selectedSong = songs.indexOf(song)
    setCurrentSong(songs[selectedSong])

    if (isPlaying) {
      audioref.current.play();
    }
  }


  return (
    <div className={`flex md:px-8 px-2 overflow-x-hidden py-4 gap-2 cursor-pointer transition-all hover:bg-[hsl(267,68%,90%)] ${song.active ? "bg-[hsl(267,68%,80%)]" : ""}`} onClick={songSelectHandler}>
      <img className="md:w-1/3 w-1/5 " src={song.cover} alt={song.name} />
      <div className="flex flex-col ">
        <h3 className="text-gray-700 md:text-lg font-bold">{song.name}</h3>
        <h4 className="text-gray-600">{song.artist}</h4>
      </div>
    </div>
  );
}

function Library({ songs, setCurrentSong, audioref, isPlaying, isLibraryOpen}) {

  return (
    <>
      <div className={`absolute top-0 h-screen shadow-lg overflow-auto transition-all duration-300 bg-[hsl(0,0%,95%)] w-32 md:w-80 ${isLibraryOpen ? "left-0 opacity-100" : "opacity-0 -left-80"} `}>
        <h2 className="px-8 pt-4 text-xl ">Library</h2>
        <div className="mt-4">
          {songs.map((song) => (
            <LibrarySong key={song.id} songs={songs} song={song} setCurrentSong={setCurrentSong} audioref={audioref} isPlaying={isPlaying} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Library;
