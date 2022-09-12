import React from "react";
import browse from "../../img/browse.png";
import attraction from "../../img/attraction.png";
import video from "../../img/video.png";
import blog from "../../img/blog.png";
import about from "../../img/about.png";
import NavButton from "./NavButton";
import FilterDropdown from "../Menu/FilterDropdown";
import NavMenu from "../Menu/NavMenu";

const navButtons = [
  { image: browse, label: "Browse", active: true },
  { image: attraction, label: "Suggest Attraction", active: false },
  { image: video, label: "Videos", active: false },
  { image: blog, label: "Blog", active: false },
  { image: about, label: "About", active: false },
];

const Sidebar = () => {
  return (
    <aside className="h-screen bg-[#313541] flex z-50">
      <dl className="divide-y divide-[#2C303B]">
        {navButtons.map((button) => (
          <NavButton
            key={button.label}
            image={button.image}
            active={button.active}
            label={button.label}
          />
        ))}
      </dl>

      <div className="w-[350px] bg-[#282C37] p-[25px] no-scrollbar overflow-y-auto">
        <FilterDropdown />

        <NavMenu />
      </div>
    </aside>
  );
};

export default Sidebar;
