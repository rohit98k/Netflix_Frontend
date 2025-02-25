import React, { useEffect } from "react";
import { CiPlay1 } from "react-icons/ci";
import { CiCircleAlert } from "react-icons/ci";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  const detail = useSelector((store) => store.movie.detail);
  console.log(detail);
  return (
    <div className="w-screen aspect-video text-white absolute z-10 mt-[18%] p-10 flex flex-col gap-2">
      <h1 className="text-3xl font-bold">
        {detail.title && detail.description
          ? detail.title
          : "LG 4K DEMO HDR 2018 (60FPS) ELBA"}
      </h1>
      <h2 className="text-md w-[550px]">
        {detail.title && detail.description
          ? detail.description
          : "First in Youtube World LG Content Demo 2018. Turn on your 4k TV and feel the crisp HDR images on your TV and feel the smoothness of the image resolution 4k 60fps"}
      </h2>
      <div className="flex gap-3">
        <button className="bg-white text-black p-2 w-[100px] rounded-lg flex items-center justify-center gap-1 hover:bg-slate-300">
          <CiPlay1 size={"1.5rem"} />
          <span>Play</span>
        </button>
        <button className="bg-white text-black p-3 w-[150px] rounded-lg flex items-center justify-center gap-1 opacity-60 hover:opacity-100">
          <CiCircleAlert size={"1.5rem"} />
          <span>Watch More</span>
        </button>
      </div>
    </div>
  );
};

export default MovieContainer;
