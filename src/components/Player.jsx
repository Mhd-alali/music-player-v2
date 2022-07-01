import React from "react";

function Player() {

  return (
    <div className="flex flex-col items-center gap-10 min-h-[20vh]">
      <div className="2xl:w-2/4 lg:w-2/3 w-11/12 flex flex-col">
        <div className="flex w-auto justify-between">
          <p className="">01:00</p>
          <p className="">02:35</p>
        </div>
        <input className="w-full" type="range" />
      </div>
      <div className="flex gap-16">
        <div className="">
          <svg className="w-12 lg:w-14"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M13 5.9296875L6.9296875 12L13 18.070312L14.5 16.570312L9.9296875 12L14.5 7.4296875L13 5.9296875 z" />
          </svg>
        </div>
        <div className="">
          <svg className="w-12 lg:w-14 block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M6 5L6 19L10 19L10 5L6 5 z M 14 5L14 19L18 19L18 5L14 5 z" />
          </svg>
          <svg className="w-12 lg:w-14 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M8,5v14l11-7L8,5z" />
          </svg>
        </div>
        <div className="">
          <svg className="w-12 lg:w-14"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M10 5.9296875L8.5 7.4296875L13.070312 12L8.5 16.570312L10 18.070312L16.070312 12L10 5.9296875 z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Player;
