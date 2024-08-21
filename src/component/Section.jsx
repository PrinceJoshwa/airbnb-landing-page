import React, { useState } from "react";
import { CiMoneyBill } from "react-icons/ci";
import { FaSwimmingPool } from "react-icons/fa";
import { RiLandscapeLine } from "react-icons/ri";
import {
  GiSpookyHouse,
  GiTreehouse,
  GiWorld,
  GiSpaceship,
  GiBeachBucket,
  GiSurferVan,
  GiFarmTractor,
  GiCampingTent,
  GiMountainCave,
  GiVillage,
} from "react-icons/gi";
import { polly } from './data';

const Section = () => {
  const icons = [
    { icon: <CiMoneyBill />, label: "Icons" },
    { icon: <FaSwimmingPool />, label: "Amazing pools" },
    { icon: <RiLandscapeLine />, label: "Amazing views" },
    { icon: <GiSpookyHouse />, label: "Farms" },
    { icon: <GiTreehouse />, label: "Treehouses" },
    { icon: <GiWorld />, label: "Top of the world" },
    { icon: <GiSpaceship />, label: "OMG!" },
    { icon: <GiBeachBucket />, label: "Beachfront" },
    { icon: <GiSurferVan />, label: "Lakefront" },
    { icon: <GiFarmTractor />, label: "Tiny homes" },
    { icon: <GiCampingTent />, label: "Cabins" },
    { icon: <GiMountainCave />, label: "Mountain caves" },
    { icon: <GiVillage />, label: "Countryside" },
  ];

  const [selectedContent, setSelectedContent] = useState(polly);
  const [activeIcon, setActiveIcon] = useState("Icons");

  const handleIconClick = (label) => {
    if (label === "Icons") {
      setSelectedContent(polly);
    }
    setActiveIcon(label);
  };

  return (
    <div className="relative w-full pt-12">
      <div className="relative w-full pt-1.5">
        <div className="flex flex-nowrap overflow-x-scroll px-4">
          {icons.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center w-24 mr-4 cursor-pointer ${
                activeIcon === item.label
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500"
              }`}
              onClick={() => handleIconClick(item.label)}
            >
              <span className="text-3xl">{item.icon}</span>
              <p className="text-center mt-2 text-[12px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 px-4">
        <div className=" grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {selectedContent.map((shop, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={shop.image}
                alt={shop.title}
                className="w-80 h-72 object-cover mb-2 rounded-xl"
              />
              <div className="text-left">
                <p className="text-black text-lg">{shop.title}</p>
                <p className="text-gray-500 text-lg">{shop.host}</p>
                <p className="text-black text-sm">{shop.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
