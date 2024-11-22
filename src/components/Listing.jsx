import React from "react";
// import ListingCarousel from "./ListingCarousel";

const Listing = ({ data, title }) => {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold text-center mb-2  mb-[30px]">
        {title}
      </h1>
      {/* <ListingCarousel data={data} /> */}
    </div>
  );
};

export default Listing;
