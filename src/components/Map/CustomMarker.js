import React, { useCallback } from "react";
import marker from "../../img/marker.png";
import { useSelectedContext } from "../../context/SelectedContext";

const CustomMarker = (props) => {
  const { data } = props;
  const { selected, setSelected } = useSelectedContext();

  // set the selected marker
  const onClick = useCallback(() => {
    setSelected(data);
  }, [setSelected, data]);

  return (
    <div
      onClick={onClick}
      className={`relative ${
        selected && selected.place_name === data.place_name
          ? "w-[90px] h-[90px] z-50"
          : "w-[45px] h-[45px]"
      } `}
    >
      <img
        src={marker}
        alt="marker"
        className={`${
          selected && selected.place_name === data.place_name
            ? "w-[90px]"
            : "w-[45px]"
        } absolute -top-[150%] right-1/2`}
      />
      {data && (
        <div
          className={`absolute ${
            selected && selected.place_name === data.place_name
              ? "bg-[#92D72E] -top-[135%] -left-7 px-7 space-y-2"
              : "bg-[#282C37] -top-[130%] -left-3 px-4"
          } text-white py-2 rounded-l-full whitespace-nowrap`}
        >
          <h4 className={`${
            selected && selected.place_name === data.place_name
              ? "text-[20px] font-medium"
              : ""
          }`}>{data.place_name}</h4>
          {selected && selected.place_name === data.place_name && (
            <h4>{data.address}</h4>
          )}
        </div>
      )}
    </div>
  );
};

export default React.memo(CustomMarker);
