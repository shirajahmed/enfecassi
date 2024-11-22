"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FlagIcon, HeartIcon } from "@heroicons/react/solid";
// import SignupModal from "./SignupModal";

function CustomArrow({ onClick, direction, isHidden }) {
  if (isHidden) return null;

  return (
    <div
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 z-10 ${
        direction === "next" ? "right-2" : "left-2"
      } cursor-pointer bg-white text-black flex items-center justify-center rounded-full shadow-lg`}
      style={{
        width: "30px",
        height: "30px",
      }}
    >
      {direction === "next" ? (
        <span className="material-icons">&#8250;</span>
      ) : (
        <span className="material-icons">&#8249;</span>
      )}
    </div>
  );
}
const ListingCarousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    nextArrow: (
      <CustomArrow
        direction="next"
        isHidden={currentSlide >= data.length - 1}
      />
    ),
    prevArrow: <CustomArrow direction="prev" isHidden={currentSlide <= 0} />,
  };

  return (
    <div className="mx-auto">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[220px] cursor-pointer p-3 bg-white rounded-lg"
          >
            <div className="relative w-[220px] h-[150px]  flex items-center justify-center">
              {item.imgUrl ? (
                <img
                  src={item.imgUrl}
                  alt={item.address || "Property"}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="w-[220px] h-[150px] bg-[#e8e9ea] rounded-lg flex flex-col items-start px-2 justify-center">
                  <FlagIcon className="w-6 h-6 text-gray-400" />
                  <p className="text-gray-500 text-[16] text-center mt-2 ">
                    See more homes for sale in
                  </p>
                  <p className="font-bold text-[20]">{item.name}</p>
                  <button className="mt-1 font-bold px-3 py-1 bg-[#fff] text-[#407680] hover:text-[#fff] hover:bg-[#407680] rounded">
                    Take a look
                  </button>
                </div>
              )}

              {(item.newTag || item.openTag) && (
                <div className="absolute top-2 left-2 flex space-x-2">
                  {item.newTag && (
                    <span className="bg-white text-black uppercase text-xs px-2 py-1 rounded">
                      {item.newTag}
                    </span>
                  )}
                  {item.openTag && (
                    <span className="bg-white text-black uppercase text-xs px-2 py-1 rounded">
                      {item.openTag}
                    </span>
                  )}
                </div>
              )}

              {item.price && (
                <div
                  className="absolute top-2 right-2"
                  onClick={() => setModalOpen(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white" // Change stroke color to white
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
              )}
            </div>

            {item.price && (
              <div className="mt-4 w-[220px]">
                <p className="text-[20px] font-semibold">
                  ₹{item.price.toLocaleString()}
                </p>
                <p className="text-[16px] text-gray-600">{item.address},</p>
                <p className="text-[16px] text-gray-600">{item.city}</p>
                {item.additional && (
                  <p className="text-xs uppercase text-gray-500 mt-1">
                    {item.additional}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </Slider>

      {/* <SignupModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} /> */}
    </div>
  );
};

export default ListingCarousel;
