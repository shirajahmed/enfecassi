"use client";
import React, { useState } from "react";
import SearchModal from "./SearchModal";

const Checkout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="bg-center mt-1  rounded-lg pb-[100px]">
      <div className=" h-full flex items-center justify-center text-white">
        <div className="text-center w-[60vw] ">
          <h3 className="text-xl text-black font-bold mb-6 text-center max-w-[1000px]">
            Check out a neighborhood
          </h3>

          <div className="mt-2 z-100 relative w-[100%]">
            <div className="flex items-center w-full max-w-lg mx-auto px-4 pb-4">
              <input
                type="text"
                className="w-[72%] flex-grow px-4 py-2 rounded-l-md border h-[60px] text-[20px] border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#007882] focus:border-[#007882]"
                placeholder="San Francisco, CA"
                onClick={() => setIsModalOpen(true)}
              />
              <button className="w-[25%] md:w-auto p-3 bg-red-500 text-white h-[60px] px-4 rounded-r-md hover:bg-red-600 focus:outline-none">
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
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>

            <SearchModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
