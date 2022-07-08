import React from "react";

function Player({ currentSong, audioref, isPlaying,setIsPlaying, songs, setCurrentSong }) {
  const imgref = React.useRef(null);
  const rangeref = React.useRef(null);

  const [info, setInfo] = React.useState({
    currentTime: 0,
    duration: null,
  });

  //
  ////Event handlers
  //

  function handleDurationChange() {
    let newInfo = { duration: audioref.current.duration, currentTime: 0 };
    rangeref.current.max = newInfo.duration;
    rangeref.current.value = newInfo.currentTime;
    setInfo(newInfo);
  }

  function updateTime(eve) {
    let newInfo = { ...info, currentTime: Math.floor(eve.target.currentTime) };
    rangeref.current.value = newInfo.currentTime;
    setInfo(newInfo)
  }

  function handleDrag(eve) {
    let newInfo = { ...info, currentTime: Math.floor(eve.target.value) };
    audioref.current.currentTime = newInfo.currentTime
    setInfo(newInfo)
  }

  function toggleSong(eve) {
    const audio = audioref.current;
    const img = imgref.current;

    if (!isPlaying) {
      audio.play();
      img.src = "pause.svg";
      setIsPlaying(true)
    } else {
      img.src = "play.svg";
      audio.pause();
      setIsPlaying(false)
    }
  }

  function handleBack() {
    let song = songs.filter(song => song.id === currentSong.id)
    let index = songs.indexOf(song[0])

    console.log(currentSong);
    console.log(song);
    console.log(index);

    if (index === 0) {
      index = songs.length - 1
    }
    else {
      index--
    }

    setCurrentSong(songs[index])
  }

  function handleForward() {
    let song = songs.filter(song => song.id === currentSong.id)
    let index = songs.indexOf(song[0])

    console.log(currentSong);
    console.log(song);
    console.log(index);

    if (index === songs.length - 1) {
      index = 0
    }
    else {
      index++
    }

    setCurrentSong(songs[index])
  }

  //
  //// functions
  //

  function formatTime(number) {
    return `${Math.floor(number / 60)}:${("0" + Math.floor(number % 60)).slice(-2)}`;
  }

  return (
    <div className={`flex flex-col items-center gap-10 min-h-[20vh] `}>
      <div className="2xl:w-2/4 lg:w-2/3 w-11/12 flex flex-col">
        <div className="flex w-auto justify-between">
          <p className="">{formatTime(info.currentTime)}</p>
          <p className="">{formatTime(info.duration)}</p>
        </div>
        <input onChange={handleDrag} ref={rangeref} className="range w-full" type="range" />
      </div>
      <div className="flex gap-16">
        <div onClick={handleBack} className="">
          <svg className="w-12 lg:w-14 hover:opacity-80" viewBox="0 0 24 24">
            <path d="M13 5.9296875L6.9296875 12L13 18.070312L14.5 16.570312L9.9296875 12L14.5 7.4296875L13 5.9296875 z" fill="hsl(267,30%,40%)" />
          </svg>
        </div>
        <div className="w-12 lg:w-14 ">
          <img
            className="hover:opacity-80"
            onClick={toggleSong}
            ref={imgref}
            src="play.svg"
            alt="play and pause button"
          />
        </div>
        <div onClick={handleForward} className="">
          <svg className="w-12 lg:w-14 hover:opacity-80" viewBox="0 0 24 24">
            <path d="M10 5.9296875L8.5 7.4296875L13.070312 12L8.5 16.570312L10 18.070312L16.070312 12L10 5.9296875 z" fill="hsl(267,30%,40%)" />
          </svg>
        </div>
      </div>
      <audio onDurationChange={handleDurationChange} onTimeUpdate={updateTime} ref={audioref} src={currentSong.audio}></audio>
    </div>
  );
}

export default Player;
