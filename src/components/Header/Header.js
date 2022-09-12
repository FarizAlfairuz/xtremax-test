import React from "react";
import settings from "../../img/settings.png";
import quest from "../../img/quest.png";
import close from "../../img/close.png";

const Header = () => {
  return (
    <header className="flex bg-[#F4F7FA] w-full py-[42px] px-[55px] justify-between z-50 max-h-[127px]">
      <h1 className="font-bold text-2xl text-[#313541]">
        TOP-RATED TOURIST ATTRACTIONS IN SINGAPORE
      </h1>

      <div className="flex space-x-5">
        <img src={settings} alt="settings-logo" className="max-w-[31px] max-h-[31px]" />
        <img src={quest} alt="question-logo" className="max-w-[31px] max-h-[31px]" />
        <img src={close} alt="close-logo" className="max-w-[31px] max-h-[31px]" />
      </div>
    </header>
  );
};

export default Header;
