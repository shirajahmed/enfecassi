/* eslint-disable @next/next/no-img-element */
import React from "react";

const Overview = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold mb-6 text-center max-w-[1000px]">
        See how Trulia can help
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] w-full">
        <div className="flex flex-col items-center text-center  p-5">
          <img
            src="/BuyAHome.svg"
            alt="Buy a home"
            className="w-auto h-[128px] object-cover mb-4 rounded-lg"
          />
          <h3 className="text-xl font-semibold mb-2">Buy a home</h3>
          <p className="text-gray-600 mb-4 max-w-[260px]">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </p>
          <button className="bg-[#007882] text-white px-4 py-2 text-lg  rounded-md w-[180px]">
            Find a home
          </button>
        </div>

        <div className="flex flex-col items-center text-center p-5">
          <img
            src="/RentAHome.svg"
            alt="Buy a home"
            className="w-auto h-[128px] object-cover mb-4 rounded-lg"
          />
          <h3 className="text-xl font-semibold mb-2">Rent a home</h3>
          <p className="text-gray-600 mb-4 max-w-[260px]">
            With 35+ filters and custom keyword search, Trulia can help you
            easily find a home or apartment for rent that you will love.
          </p>
          <button className="bg-[#007882] text-white px-4 py-2 text-lg rounded-md w-[180px]">
            Find a rental
          </button>
        </div>

        <div className="flex flex-col items-center text-center p-5">
          <img
            src="/Neighborhoods.svg"
            alt="Buy a home"
            className="w-auto h-[128px] object-cover mb-4 rounded-lg"
          />
          <h3 className="text-xl font-semibold mb-2">See neighborhoods</h3>
          <p className="text-gray-600 mb-4 max-w-[260px]">
            With more neighborhood insights than any other real estate website,
            we have captured the color and diversity of communities.
          </p>
          <button className="bg-[#007882] text-white px-4 py-2 text-lg rounded-md w-[180px]">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
