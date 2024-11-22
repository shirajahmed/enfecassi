"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    type: "image",
    address: "Atlanta, GA",
    linkur: "https://randomurl1.com",
    imageUrl:
      "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ca/oakland/longfellow/570-ca_sf_longfellow_268264_0059_500x_cfit.jpg",
  },
  {
    type: "image",
    address: "Miami, FL",
    linkur: "https://randomurl2.com",
    imageUrl:
      "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ca/oakland/longfellow/570-ca_sf_longfellow_268264_0059_500x_cfit.jpg",
  },
  {
    type: "review",
    address: "Scottsdale, AZ",
    linkur: "",
    imageUrl: "",
    name: "Shiraj",
    message:
      "I just moved to the neighborhood 2 years ago and love it! It's a great mix of families, seniors and everyone feels welcome.",
  },
  {
    type: "image",
    address: "Chicago, IL",
    linkur: "https://randomurl3.com",
    imageUrl:
      "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ca/carlsbad/rancho-la-costa/2501-ca_sd_rancho_la_costa_229306_162_500x_cfit.jpg",
  },
  {
    type: "image",
    address: "Los Angeles, CA",
    linkur: "https://randomurl4.com",
    imageUrl: "https://randomimage4.com",
  },
  {
    type: "image",
    address: "New York, NY",
    linkur: "https://randomurl5.com",
    imageUrl:
      "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ga/atlanta/downtown/1935-ga_atl_downtown_82792_048_500x_cfit.jpg",
  },
  {
    type: "review",
    address: "Dallas, TX",
    linkur: "",
    imageUrl: "",
    name: "John",
    message:
      "A wonderful neighborhood! It's peaceful, and there are lots of parks for the kids to play.",
  },

  {
    type: "image",
    address: "Seattle, WA",
    linkur: "https://randomurl6.com",
    imageUrl: "https://randomimage6.com",
  },
  {
    type: "image",
    address: "San Francisco, CA",
    linkur: "https://randomurl7.com",
    imageUrl: "https://randomimage7.com",
  },
  {
    type: "review",
    address: "Houston, TX",
    linkur: "",
    imageUrl: "",
    name: "Emily",
    message:
      "The community is fantastic. Everyone is so friendly, and there's a real sense of safety.",
  },
  {
    type: "image",
    address: "Boston, MA",
    linkur: "https://randomurl8.com",
    imageUrl: "https://randomimage8.com",
  },
];

function CustomArrow({ onClick, direction }) {
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
        <span className="material-icons ">&#8250;</span>
      ) : (
        <span className="material-icons ">&#8249;</span>
      )}
    </div>
  );
}

const ExploreCarousel = () => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
  };

  return (
    <div className="mx-auto">
      <Slider {...settings}>
        {data.map((item, index) => {
          // Full-height card for indexes like 0, 5, 10, etc.
          if (index === 0 || index === 3 || index === 6 || index === 9) {
            return (
              <div key={index} className="p-2 gap-4">
                <div className="h-[400px] w-[280px] relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                  <div className="absolute top-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{item.address}</h3>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <a
                      href={item.linkur}
                      className="bg-white/80 text-black px-4 py-2 rounded-lg font-medium flex items-center shadow-md"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Homes{" "}
                      <span className="ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={index} className="p-2 grid grid-rows-2 gap-2">
              {[item, data[index + 1]]
                .filter((subItem) => subItem)
                .map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="h-[192px] w-[280px] relative bg-gray-200 mb-4 rounded-lg overflow-hidden"
                  >
                    {subItem.type === "image" ? (
                      <a href={subItem.linkur} target="_blank" rel="noreferrer">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${subItem.imageUrl})`,
                          }}
                        ></div>
                        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                        <div className="absolute top-4 left-4 text-white">
                          <h3 className="text-lg font-semibold">
                            {subItem.address}
                          </h3>
                        </div>
                      </a>
                    ) : (
                      <div className="p-4 h-full flex flex-col justify-center">
                        <div className="mb-4">
                          <p className="text-[16px] font-semibold">
                            {subItem.name}
                          </p>
                          <p className="text-[18px] font-semibold">
                            {subItem.address}
                          </p>
                        </div>
                        <p className="text-gray-700">{subItem.message}</p>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ExploreCarousel;
