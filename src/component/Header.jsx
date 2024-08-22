import React, { useState } from "react";
import logo from "../assets/logo.png";
import { LuGlobe, LuSearch } from "react-icons/lu";
import { FaUserCircle, FaBars } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Header = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const [activeTab, setActiveTab] = useState("stays");

  const renderSearchFields = () => {
    if (activeTab === "stays") {
      return (
        <>
          <div className="flex-1 px-4">
            <label className="block text-xs font-semibold">Where</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Search destinations"
              className="w-full text-sm focus:outline-none"
            />
          </div>
          <div className="flex-1 border-l px-4">
            <label className="block text-xs font-semibold">Check in</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Add date"
              className="w-full text-sm focus:outline-none"
              monthsShown={2} 
            />
          </div>
          <div className="flex-1 border-l px-4">
            <label className="block text-xs font-semibold">Check out</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="Add date"
              className="w-full text-sm focus:outline-none"
              monthsShown={2}  
            />
          </div>
          <div className="flex-1 border-l px-4">
            <label className="block text-xs font-semibold">Who</label>
            <input
              type="text"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              placeholder="Add guests"
              className="w-full text-sm focus:outline-none"
            />
          </div>
        </>
      );
    } else if (activeTab === "experiences") {
      return (
        <>
          <div className="flex-1 px-4">
            <label className="block text-xs font-semibold">Where</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Search experiences"
              className="w-full text-sm focus:outline-none"
            />
          </div>
          <div className="flex-1 border-l px-4">
            <label className="block text-xs font-semibold">Date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Add dates"
              className="w-full text-sm focus:outline-none"
              monthsShown={2}  
            />
          </div>
          <div className="flex-1 border-l px-4">
            <label className="block text-xs font-semibold">Who</label>
            <input
              type="text"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              placeholder="Add guests"
              className="w-full text-sm focus:outline-none"
            />
          </div>
        </>
      );
    }
  };

  return (
    <header className="relative bg-white shadow-md py-2">
      <div className="flex items-center justify-between px-8"> 
        <img src={logo} alt="Logo" className="h-20 md:h-28" />
        <div className="flex space-x-4">
          <button
            className={`font-semibold text-lg ${
              activeTab === "stays" ? "text-black" : "text-slate-500 hover:text-black"
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
        <div className="flex items-center space-x-4">
          <button className="text-slate-700 font-semibold">Airbnb your home</button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <LuGlobe size={20} />
          </button>
          <div className="flex items-center space-x-2 border rounded-full p-2 shadow-sm hover:shadow-md cursor-pointer">
            <FaBars size={20} />
            <FaUserCircle size={24} />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <div className="flex items-center border rounded-full shadow-sm hover:shadow-md w-full max-w-3xl p-2 bg-white">
          {renderSearchFields()}
          <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full ml-4">
            <LuSearch size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
