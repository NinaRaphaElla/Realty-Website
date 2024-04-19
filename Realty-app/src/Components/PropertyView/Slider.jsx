import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SliderImg() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      label: "Living Room",
    },
    {
      url: "https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      label: "Bed Room",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1682377521566-f70ac8abe597?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      label: "Kitchen Area",
    },
    {
      url: "https://images.unsplash.com/photo-1631048499052-e6d9f305d2c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      label: "Bathroom",
    },
    {
      url: "https://st.hzcdn.com/simgs/pictures/sheds/stonehaven-garage-blue-sky-building-company-img~2d01fa340ef24f03_14-2817-1-3b7d911.jpg",
      label: "Garage",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-full h-[480px] lg:h-[650px] mx-2 md:mx-16 py-24 px-2 relative group transition-all ease-in-out duration-300">
      <div className="absolute w-[97%] md:w-[99%] text-md md:text-xl text-rawWhite bottom-28 flex justify-center items-center">
        <span
          style={{
            textAlign: "center",
            maxWidth: "90%",
            overflowWrap: "break-word",
          }}
        >
          {slides[currentIndex].label}
        </span>
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 text-2xl rounded-full shadow bg-accent text-white cursor-pointer">
        <MdKeyboardArrowLeft onClick={prevSlide} size={40} />
      </div>
      {/* Right Arrow */}
      <div className="md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-8 text-2xl rounded-full shadow bg-accent text-white cursor-pointer">
        <MdKeyboardArrowRight onClick={nextSlide} size={40} />
      </div>

      <div className="flex top-10 items-center justify-center py-4 gap-1 md:gap-2">
        {slides.map((_, i) => (
          <div
            className={`transition-all w-1.5 h-1.5 md:w-2 md:h-2 bg-accent rounded-full
                ${
                  currentIndex === i
                    ? "transition-all ease-in-out duration-300 p-0.5 md:p-1"
                    : "bg-opacity-40"
                }
                `}
          />
        ))}
      </div>
    </div>
  );
}

export default SliderImg;
