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
    <div className={`flex px-8 py-4 gap-2 cursor-pointer transition-all hover:bg-[hsl(267,68%,88%)] scale-0 h-0 group-hover:scale-100 group-hover:h-auto ${song.active ? "bg-[hsl(267,68%,80%)]" : ""}`} onClick={songSelectHandler}>
      <img className="w-1/3" src={song.cover} alt={song.name} />
      <div className="flex flex-col ">
        <h3 className="text-gray-700 text-lg font-bold">{song.name}</h3>
        <h4 className="text-gray-600">{song.artist}</h4>
      </div>
    </div>
  );
}

function Library({ songs, setCurrentSong, audioref, isPlaying, setSongs }) {

  return (
    <>
      <div className={"library group"}>
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
