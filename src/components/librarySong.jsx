import React from "react";


function LibrarySong({ song }) {
  return (
    <div className={"flex px-8 py-4 gap-2 cursor-pointer transition-all hover:bg-[hsl(267,68%,88%)]"}>
      <img className="w-1/3" src={song.cover} alt={song.name} />
      <div className="flex flex-col">
          <h3 className="text-gray-700 text-lg font-bold">{song.name}</h3>
          <h4 className="text-gray-600">{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;