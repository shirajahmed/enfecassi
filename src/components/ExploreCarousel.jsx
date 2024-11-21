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
    imageUrl: "https://randomimage1.com",
  },
  {
    type: "image",
    address: "Miami, FL",
    linkur: "https://randomurl2.com",
    imageUrl: "https://randomimage2.com",
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
    imageUrl: "https://randomimage3.com",
  },
  {
    type: "image",
    address: "Los Angeles, CA",
    linkur: "https://randomurl4.com",
    imageUrl: "https://randomimage4.com",
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
    address: "New York, NY",
    linkur: "https://randomurl5.com",
    imageUrl: "https://randomimage5.com",
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

const ExploreCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    adaptiveWidth: true,
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <Slider {...settings}>
        {data.map((item, index) => {
          if (index === 0) {
            // Single card for the first slide
            return (
              <div key={index} className="p-4">
                <div className="h-[400px] w-[280px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={item.imageUrl}
                    alt={item.address}
                    className="w-full h-[75%] object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{item.address}</h3>
                  </div>
                </div>
              </div>
            );
          }

          // Stacked cards for the second and subsequent slides
          return (
            <div key={index} className="p-4 grid grid-rows-2 gap-4">
              {[item, data[index + 1]].map(
                (subItem, subIndex) =>
                  subItem && (
                    <div
                      key={subIndex}
                      className="h-[400px] w-[280px] bg-gray-200 rounded-lg overflow-hidden shadow-lg"
                    >
                      {subItem.type === "image" ? (
                        <a
                          href={subItem.linkur}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={subItem.imageUrl}
                            alt={subItem.address}
                            className="w-full h-[75%] object-cover"
                          />
                          <div className="p-4">
                            <h3 className="text-xl font-semibold">
                              {subItem.address}
                            </h3>
                          </div>
                        </a>
                      ) : (
                        <div className="p-4 h-full flex flex-col justify-center">
                          <h3 className="text-xl font-semibold">
                            {subItem.name}
                          </h3>
                          <p className="text-gray-700">{subItem.message}</p>
                        </div>
                      )}
                    </div>
                  )
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ExploreCarousel;
