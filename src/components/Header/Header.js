import React, { useCallback } from "react";
import settings from "../../img/settings.png";
import quest from "../../img/quest.png";
import close from "../../img/close.png";
import { useSelectedContext } from "../../context/SelectedContext";

const Header = () => {
  const { setSelected, setSelectedMenu } = useSelectedContext();

  const onClick = useCallback(() => {
    setSelected(null)
    setSelectedMenu(null)
  }, [setSelected, setSelectedMenu])

  return (
    <header className="flex z-50 bg-[#F4F7FA] w-full py-[42px] px-[55px] justify-between max-h-[127px]">
      <h1 className="font-bold text-2xl text-[#313541]">
        TOP-RATED TOURIST ATTRACTIONS IN SINGAPORE
      </h1>

      <div className="flex space-x-5">
        <img
          src={settings}
          alt="settings-logo"
          className="max-w-[31px] max-h-[31px]"
        />
        <img
          src={quest}
          alt="question-logo"
          className="max-w-[31px] max-h-[31px]"
        />
        <img
          onClick={onClick}
          src={close}
          alt="close-logo"
          className="max-w-[31px] max-h-[31px] cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
