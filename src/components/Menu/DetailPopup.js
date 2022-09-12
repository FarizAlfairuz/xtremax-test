import React from "react";
import { useSelectedContext } from "../../context/SelectedContext";
import mark_icon from "../../img/mark_icon.png";
import world_icon from "../../img/world_icon.png";

const DetailPopup = () => {
  const { selected } = useSelectedContext();
  return (
    selected && (
      <aside className="absolute right-0 h-screen bg-[#313541] w-[349px] z-10 no-scrollbar overflow-y-auto">
        <img
          src={selected.image}
          alt="detail"
          className="mt-[127px] aspect-video object-cover"
        />
        <div className="px-[35px] py-[16px] bg-[#72cdd2]">
          <h3 className="text-white text-[24px]">{selected.place_name}</h3>
        </div>
        <div className="px-[35px] py-[16px] space-y-4">
          <p className="text-[#cccccc]">{selected.description}</p>
          <div className="space-y-1">
            <div className="text-[#cccccc] flex items-center space-x-2">
              <span>
                <img src={mark_icon} alt="mark" />
              </span>
              <h6>{selected.address}</h6>
            </div>
            <div className="text-[#cccccc] flex items-center space-x-2">
              <span>
                <img src={world_icon} alt="world" />
              </span>
              <h6>http://www.marinabaysands.com/</h6>
            </div>
          </div>
        </div>
      </aside>
    )
  );
};

export default DetailPopup;
