"use client";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import Link from "next/link";
import SignupModal from "./SignupModal";

const navData = [
  {
    title: "Sign up or Log in",
    hasDropdown: false,
    options: [],
  },

  {
    title: "Buy",
    hasDropdown: false,
    options: [],
  },
  {
    title: "Rent",
    hasDropdown: true,
    options: ["Post A Rental Listing"],
  },
  {
    title: "Mortgage",
    hasDropdown: true,
    options: [
      "Mortgage Overview",
      "Mortgage Calculator",
      "Rent vs Buy Calculator",
    ],
  },
  {
    title: "Local Info",
    hasDropdown: true,
    options: ["All Trulia Neighborhood Guides"],
  },
  {
    title: "Additional Resources",
    hasDropdown: true,
    options: ["Trulia Blogs", "Help Center"],
  },
];

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownRentOpen, setDropdownRentOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleDropdown = (title) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  return (
    <>
      <header className="bg-white ">
        <div className=" w-full px-0 flex items-center justify-between py-0">
          <div className="flex items-center justify-start ml-0">
            <Link href="/">
              <div className="text-[24px] pr-6 py-4 font-bold text-[#000]">
                Logo
              </div>
            </Link>
            {/* Laptop Menu */}
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-[#3b4144] hover:bg-[#407680] hover:text-white px-4 py-2 rounded-md font-bold"
              >
                Buy
              </a>

              <div className="relative group">
                <button className="text-[#3b4144] hover:bg-[#407680] hover:text-white px-4 py-2 rounded-md font-bold">
                  Rent
                </button>
                <div className="absolute top-full mt-0 bg-white shadow-md rounded-md w-fit opacity-0 group-hover:opacity-100 group-hover:block hidden">
                  <a
                    href="#"
                    className="block px-3 py-2 whitespace-nowrap hover:bg-gray-100 hover:underline font-size-[14px] border-b last:border-0"
                  >
                    Post A Rental Listing
                  </a>
                </div>
              </div>

              <div className="relative group">
                <button className="text-[#3b4144] hover:bg-[#407680] hover:text-white px-4 py-2 rounded-md font-bold">
                  Mortgage
                </button>
                <div className="absolute top-full mt-0 bg-white shadow-md rounded-md w-fit opacity-0 group-hover:opacity-100 group-hover:block hidden">
                  <a
                    href="#"
                    className="block whitespace-nowrap px-3 py-2 hover:bg-gray-100 hover:underline font-size-[14px] border-b last:border-0"
                  >
                    Post A Rental Listing
                  </a>
                  <a
                    href="#"
                    className="block px-3 whitespace-nowrap py-2 hover:bg-gray-100 hover:underline font-size-[14px] border-b last:border-0"
                  >
                    Get Pre Qulified
                  </a>
                  <a
                    href="#"
                    className="block px-3 whitespace-nowrap py-2 hover:bg-gray-100 hover:underline font-size-[14px]"
                  >
                    Option 3
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div className="flex items-center justify-end mr-0">
            <div className="hidden md:flex items-center space-x-4">
              <a
                type="button"
                href="#"
                className="text-[#3b4144] hover:bg-[#407680] hover:text-white px-4 py-2 rounded-md font-bold"
                onClick={() => setModalOpen(true)}
              >
                Saved Homes
              </a>
              <a
                type="button"
                href="#"
                className="text-[#3b4144] hover:bg-[#407680] hover:text-white px-4 py-2 rounded-md font-bold"
                onClick={() => setModalOpen(true)}
              >
                Saved Searches
              </a>
              <a
                type="button"
                href="#"
                className="text-[#3b4144] border px-4 py-2 rounded-md hover:bg-[#e8e9ea]  font-bold"
                onClick={() => setModalOpen(true)}
              >
                Sign up or Log in
              </a>
            </div>

            {/* Hamburger Menu */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="block text-[#007882] ml-4 p-1 "
            >
              ☰
            </button>
          </div>
        </div>

        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="fixed top-0 right-0 h-full bg-[#3d4144] shadow-md z-50 w-full max-w-[320px] py-[50px] px-[30px]">
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-[#fff] absolute top-[17px] right-7"
            >
              ✕
            </button>

            <nav className="text-[#fff] mt-4 space-y-4">
              {navData.map((item) => (
                <div key={item.title}>
                  <button
                    onClick={() =>
                      item.hasDropdown && toggleDropdown(item.title)
                    }
                    className="flex justify-between items-center w-full font-bold pb-2"
                  >
                    {item.title}
                    {item.hasDropdown && (
                      <span>
                        {openDropdowns[item.title] ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 15.75 7.5-7.5 7.5 7.5"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        )}
                      </span>
                    )}
                  </button>

                  {/* Dropdown content */}
                  {item.hasDropdown && openDropdowns[item.title] && (
                    <div className="space-y-2">
                      {item.options.map((option) => (
                        <a
                          href="#"
                          key={option}
                          className="block hover:underline font-size-[15px]"
                        >
                          {option}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>
      <SignupModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Header;
