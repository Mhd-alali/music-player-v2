import React, { useEffect } from "react";

function Player({song}) {
  const audioref = React.useRef(null)
  const imgref = React.useRef(null)

  const [info,setInfo] = React.useState({
    currentTime : null,
    duration:null
  })

  let isPlaying = false;

  //
  ////Event handlers
  //

  function updateTime(eve) {
    
  }

  function toggleSong(eve) {
    const audio = audioref.current
    const img = imgref.current

    isPlaying = !isPlaying

    if (isPlaying) {
      audio.play()
      img.src = "pause.svg"
      return
    }
    
    img.src = "play.svg"
    audio.pause()
  }
  

  return (
    <div className="flex flex-col items-center gap-10 min-h-[20vh]">
      <div className="2xl:w-2/4 lg:w-2/3 w-11/12 flex flex-col">
        <div className="flex w-auto justify-between">
          <p className="">01:00</p>
          <p className="">02:35</p>
        </div>
        <input className="w-full" type="range"/>
      </div>
      <div className="flex gap-16">
        <div className="">
          <svg className="w-12 lg:w-14"
            viewBox="0 0 24 24"
          >
            <path  d="M13 5.9296875L6.9296875 12L13 18.070312L14.5 16.570312L9.9296875 12L14.5 7.4296875L13 5.9296875 z" />
          </svg>
        </div>
        <div className="w-12 lg:w-14">
          <img onClick={toggleSong} ref={imgref} src="play.svg" alt="play and pause button" />
        </div>
        <div className="">
          <svg className="w-12 lg:w-14"
            viewBox="0 0 24 24"
          >
            <path d="M10 5.9296875L8.5 7.4296875L13.070312 12L8.5 16.570312L10 18.070312L16.070312 12L10 5.9296875 z" />
          </svg>
        </div>
      </div>
      <audio onTimeUpdate={updateTime} ref={audioref} src={song.audio}></audio>
    </div>
  );
}

export default Player;
