import React, { useState } from "react";
import logo from "../assets/logo.png";
import { LuGlobe, LuSearch } from "react-icons/lu";
import { FaUserCircle, FaBars } from "react-icons/fa";

const Header = () => {
  const [activeTab, setActiveTab] = useState("stays");

  const renderContent = () => {
    if (activeTab === "stays") {
      return (
        <>
          <div>
            <p className="text-sm font-semibold">Where</p>
            <h5 className="text-slate-500">Search Destination</h5>
          </div>
          <div>
            <p className="text-sm font-semibold">Check in</p>
            <h5 className="text-slate-500">Add Date</h5>
          </div>
          <div>
            <p className="text-sm font-semibold">Check out</p>
            <h5 className="text-slate-500">Add Date</h5>
          </div>
          <div>
            <p className="text-sm font-semibold">Who</p>
            <h5 className="text-slate-500">Add Guest</h5>
          </div>
        </>
      );
    } else if (activeTab === "experiences") {
      return (
        <>
          <div>
            <p className="text-sm font-semibold">Where</p>
            <h5 className="text-slate-500">Search Experience</h5>
          </div>
          <div>
            <p className="text-sm font-semibold"> Date</p>
            <h5 className="text-slate-500">Add Date</h5>
          </div>
          <div>
            <p className="text-sm font-semibold">Who</p>
            <h5 className="text-slate-500">Add Guests</h5>
          </div>
        </>
      );
    }
  };

  return (
    <header className="relative bg-white">
      <div className="mt-[-30px] flex flex-col md:flex-row items-center justify-between md:space-x-80">
        <img src={logo} alt="Logo" className="h-36" />
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button
            className={`font-semibold text-lg ${
              activeTab === "stays"
                ? "text-black"
                : "text-slate-500 hover:text-black"
            }`}
            onClick={() => setActiveTab("stays")}
          >
            Stays
          </button>
          <button
            className={`font-semibold text-lg ${
              activeTab === "experiences"
                ? "text-black"
                : "text-slate-500 hover:text-black"
            }`}
            onClick={() => setActiveTab("experiences")}
          >
            Experiences
          </button>
        </div>
        <div className="flex flex-col md:flex-row space-x-4">
          <button className="text-slate-700 font-semibold text-base">
            Airbnb your home
          </button>
          <div className="border shadow-xl md:rounded-full w-10 justify-center items-center">
            <button className=" ml-2.5 mt-2.5">
              <LuGlobe />
            </button>
          </div>
          <div className="border shadow-xl h-10 w-16 md:rounded-full justify-center items-center p-[10px] ">
            <button className="flex flex-col md:flex-row space-x-4 justify-center items-center mr-[30px]">
              <FaBars />
              <FaUserCircle />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-x-24 justify-center items-center border border-zinc-200 md:rounded-full top-0.5 w-3/5 h-16 right-2 ml-64 shadow-xl">
        {renderContent()}
        <button className="p-2 rounded-full bg-red-500 hover:bg-red-600 text-white">
          <LuSearch />
        </button>
      </div>
    </header>
  );
};

export default Header;
