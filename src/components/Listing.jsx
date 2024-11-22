import React from "react";
import ListingCarousel from "./ListingCarousel";

const Listing = () => {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold text-center mb-2  mb-[30px]">
        Newly listed homes in San Francisco
      </h1>
      <ListingCarousel />
    </div>
  );
};

export default Listing;
