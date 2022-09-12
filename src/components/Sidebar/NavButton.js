import React from "react";

const NavButton = (props) => {
  const { image, active, label } = props;

  return (
    <div className={`py-[26px] border-black cursor-pointer hover:bg-[#72CDD2] ${active && "bg-[#72CDD2]"}`}>
      <div className="flex flex-col items-center space-y-1">
        <img src={image} className="max-w-[41px]" alt="logo" />
        <h6 className={`${active ? "font-medium text-white" : "font-normal text-[#8298A0]"} text-base text-center leading-[15px]`}>
          {label}
        </h6>
      </div>
    </div>
  );
};

export default NavButton;
