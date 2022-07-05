import React from "react";


function Song({ song }) {
  return (
    <div className="song-container min-h-[60vh] flex flex-col items-center justify-center">
      <img className="w-1/5 rounded-full shadow-2xl shadow-gray-300 " src={song.cover} alt={song.name} />
      <h2 className="pt-12 px-4">{song.name}</h2>
      <h3>{song.artist}</h3>
    </div>
  );
}

export default Song;
