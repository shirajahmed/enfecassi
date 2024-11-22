"use client";
import { useEffect, useState } from "react";
import SearchModal from "./SearchModal";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("Buy");
  const router = useRouter();

  const handleButtonClick = (button) => {
    setActiveButton(button);
    if (button === "Rent") {
      router.push("/rent");
    } else {
      router.push("/");
    }
  };

  useEffect(() => {
    if (window.location.pathname === "/rent") {
      setActiveButton("Rent");
    }
  }, []);

  return (
    <section
      className="bg-cover bg-center mt-1 h-[65vh] md:h-[73vh] rounded-lg overflow-hidden "
      style={{
        backgroundImage: `url('/hero.webp')`,
      }}
    >
      <div className="bg-black bg-opacity-10 h-full flex items-center justify-center text-white">
        <div className="text-center w-[60vw] ">
          <h1 className="text-4xl md:text-5xl font-bold">
            Discover a place <br />
            you will love to live
          </h1>
          <div className="w-fit mt-12 flex justify-center bg-[rgba(59,65,68,.6)] rounded-lg m-auto">
            <button
              className={`text-[20px] px-6 py-2 rounded-lg font-medium leading-none focus:outline-none ${
                activeButton === "Buy"
                  ? "bg-gray-100 text-[#007882]"
                  : "text-white hover:bg-gray-100 hover:text-[#007882]"
              }`}
              onClick={() => handleButtonClick("Buy")}
            >
              Buy
            </button>
            <button
              className={`text-[20px] px-6 py-2 rounded-lg font-medium leading-none focus:outline-none ${
                activeButton === "Rent"
                  ? "bg-gray-100 text-[#007882]"
                  : "text-white hover:bg-gray-100 hover:text-[#007882]"
              }`}
              onClick={() => handleButtonClick("Rent")}
            >
              Rent
            </button>
            <button
              className={`text-[20px] px-6 py-2 rounded-lg font-medium leading-none focus:outline-none ${
                activeButton === "Sold"
                  ? "bg-gray-100 text-[#007882]"
                  : "text-white hover:bg-gray-100 hover:text-[#007882]"
              }`}
              onClick={() => handleButtonClick("Sold")}
            >
              Sold
            </button>
          </div>

          <div className="mt-2 z-100 relative w-[100%]">
            <div className="flex items-center w-full max-w-lg mx-auto px-4 pb-4">
              <input
                type="text"
                className="w-[73%] flex-grow px-4 py-2 rounded-l-md border h-[60px] text-[20px] border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

export default HeroSection;
