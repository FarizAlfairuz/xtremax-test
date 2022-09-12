import React from "react";
import marker from "../../img/marker.png";

const CustomMarker = () => {
  return (
    <div className="relative w-[45px] h-[45px]">
      <img
        src={marker}
        alt="marker"
        className="w-[45px] absolute -top-[150%] right-1/2"
      />
      <div className="absolute bg-[#282C37] text-white -top-[130%] -left-3 px-4 py-2 rounded-l-full">Merlion</div>
    </div>
  );
};

export default CustomMarker;
