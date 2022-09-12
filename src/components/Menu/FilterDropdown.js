import React from "react";
import { Popover } from '@headlessui/react'

const locations = [
  "Merlion",
  "Asian Civilisations Museum",
  "Clarke Quay",
  "Fort Canning Park",
  "Orchard Road",
  "Singapore Flyer",
  "Marina Bay Sands",
  "Gardens By The Bay",
  "Chinatown",
];

const FilterDropdown = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="text-[#7C939B] flex justify-between w-full px-3 py-2 border border-[#242832] items-center">
        <h6 className="text-base">Filter by favorite</h6>
        <span className="text-xs">▼</span>
      </Popover.Button>
      <Popover.Panel as="dl" className="bg-[#313541] absolute">
        {locations.map((location) => (
          <dd key={location} className="px-4 py-2 text-white font-medium hover:text-[#92D72E] hover:bg-[#1C1F27] cursor-pointer">
            {location}
          </dd>
        ))}
      </Popover.Panel>
    </Popover>
  );
};

export default FilterDropdown;
