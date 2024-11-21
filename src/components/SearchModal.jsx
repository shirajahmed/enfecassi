"use client";

import { useState, useEffect, useRef } from "react";

const SearchModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const modalRef = useRef(null);

  // Dummy JSON data for city suggestions
  const cities = [
    { name: "San Diego", state: "CA" },
    { name: "San Francisco", state: "CA" },
    { name: "San Jose", state: "CA" },
    { name: "Santa Clarita", state: "CA" },
    { name: "Santa Monica", state: "CA" },
  ];

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCities([]);
    } else {
      const results = cities.filter((city) =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCities(results);
    }
  }, [searchTerm]);

  // Close dropdown if clicked outside
  useEffect(() => {
    setSearchTerm("");
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    isOpen && (
      <div
        ref={modalRef}
        className="absolute z-500 top-[-10px] left-1/2 transform -translate-x-1/2 w-[60%] bg-white rounded-lg border border-gray-300 shadow-lg"
      >
        <div className="p-0">
          <div className="flex items-center justify-between px-1 pt-1 mb-1 border-b last:border-0">
            <input
              type="text"
              className="w-100 flex-grow px-4 py-2 rounded-md border h-[60px] text-[20px] border-[#007882] text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#007882] focus:border-[#007882]"
              placeholder="Search for City"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="text-[#007882] ml-3  hover:text-[#007882]-900 pr-3"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
          <div className="max-h-[200px] overflow-y-auto">
            <ul>
              <li className="text-[#007882] text-[15px] flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer border-b last:border-0">
                <span className="mr-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </span>{" "}
                Current Location
              </li>
              <li className="text-[#007882] text-[15px] flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>
                </span>{" "}
                Search by commute time
              </li>
            </ul>
            <ul>
              <li className="flex items-center font-bold text-[#3b4144] text-left px-3 py-2  font-size-[15px]">
                {filteredCities.length > 0 ? "City" : "Search"}
              </li>
            </ul>
            {filteredCities.length > 0 ? (
              <ul className="text-[#007882] mt-1">
                {filteredCities.map((city, index) => (
                  <li
                    key={index}
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer flex border-b last:border-0"
                  >
                    <span className="mr-2">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                    </span>{" "}
                    {city.name}, {city.state}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="text-[#007882] mt-1">
                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer flex border-b last:border-0">
                  No Result
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default SearchModal;
