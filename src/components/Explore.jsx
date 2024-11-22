import React from "react";
import ExploreCarousel from "./ExploreCarousel";

const Explore = () => {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold text-center mb-2 mt-[30px]">
        Explore homes on Trulia
      </h1>
      <p className="max-w-[620px] mx-auto text-center mb-[100px]">
        Take a deep dive and browse homes for sale, original neighborhood
        photos, resident reviews and local insights to find what is right for
        you.
      </p>
      <ExploreCarousel />
    </div>
  );
};

export default Explore;
