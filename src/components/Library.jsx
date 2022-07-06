import React from "react";
import LibrarySong from "./librarySong";

function Library({ songs }) {    
  return (
    <>
        <div className="absolute w-80 h-screen shadow-lg overflow-auto bg-[hsl(267,68%,96%)] ">
          <h2 className="px-8 pt-4 text-xl ">Library</h2>
          <div className="mt-4">
            {songs.map(song => <LibrarySong key={song.id} song={song}/>)}
          </div>
        </div>
    </>
  );
}

export default Library;
