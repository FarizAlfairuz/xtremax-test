import React, { useCallback } from "react";
import { Disclosure } from "@headlessui/react";
import { useSelectedContext } from "../../context/SelectedContext";

const navMenus = [
  { label: "Merlion" },
  {
    label: "Marina Bay Sands",
    children: [
      "ArtScience Museum",
      "Mariana Bay Sands Skypark",
      "Double Helix Bridge",
    ],
  },
  {
    label: "Gardens By The Bay",
    children: [
      "ArtScience Museum",
      "Mariana Bay Sands Skypark",
      "Double Helix Bridge",
    ],
  },
  {
    label: "Chinatown",
    children: [
      "ArtScience Museum",
      "Mariana Bay Sands Skypark",
      "Double Helix Bridge",
    ],
  },
  { label: "Asian Civilisations Museum" },
  { label: "Clarke Quay" },
  { label: "Fort Canning Park" },
  { label: "Singapore Flyer" },
  { label: "Orchard Road" },
];

const NavMenu = () => {
  const { setSelectedMenu, selectedMenu } = useSelectedContext();

  const onClick = useCallback(
    (label) => {
      setSelectedMenu(label);
    },
    [setSelectedMenu]
  );

  return (
    <dl className="mt-[45px]">
      {navMenus.map((menu) =>
        menu.children ? (
          <Disclosure key={menu.label}>
            <Disclosure.Button
              onClick={() => onClick(menu.label)}
              className={`${
                selectedMenu === menu.label ? "bg-[#1C1F27] text-[#92D72E]" : ""
              } text-left w-full flex justify-between items-center px-3 py-2 border-t last:border-y border-[#242832] text-white font-medium hover:text-[#92D72E] hover:bg-[#1C1F27] cursor-pointer`}
            >
              <h6 className="text-base">{menu.label}</h6>
              <span className="text-xs">▼</span>
            </Disclosure.Button>
            <Disclosure.Panel as="dl">
              {menu.children.map((child) => (
                <dt
                  key={child}
                  className="text-sm text-[#7C939B] px-8 py-1 hover:bg-[#1C1F27] cursor-pointer"
                >
                  {child}
                </dt>
              ))}
            </Disclosure.Panel>
          </Disclosure>
        ) : (
          <dt
            key={menu.label}
            onClick={() => onClick(menu.label)}
            className={`${
              selectedMenu === menu.label ? "bg-[#1C1F27] text-[#92D72E]" : ""
            } px-3 py-2 border-t last:border-y border-[#242832] text-white font-medium hover:text-[#92D72E] hover:bg-[#1C1F27] cursor-pointer`}
          >
            {menu.label}
          </dt>
        )
      )}
    </dl>
  );
};

export default NavMenu;
