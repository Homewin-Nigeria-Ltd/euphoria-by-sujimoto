import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface SwiperControlsProps {
  isBeginning: boolean;
  isEnd: boolean;
}

const SwiperControls = ({ isBeginning, isEnd }: SwiperControlsProps) => {
  return (
    <>
      <div
        className={`w-auto h-full absolute top-0 left-0 flex justify-center items-center px-2 ${
          isBeginning ? "hidden" : "block"
        }`}
        style={{ zIndex: 20 }}
      >
        <MdKeyboardArrowLeft
          size={50}
          color='white'
          className='cursor-pointer header-swiper-button-prev bg-black rounded-full aspect-square bg-opacity-[20%]'
        />
      </div>
      <div
        className={`w-auto h-full absolute top-0 right-0 flex justify-center items-center px-2 ${
          isEnd ? "hidden" : "block"
        }`}
        style={{ zIndex: 20 }}
      >
        <MdKeyboardArrowRight
          size={50}
          color='white'
          className='cursor-pointer header-swiper-button-next bg-black rounded-full aspect-square bg-opacity-[20%]'
        />
      </div>
    </>
  );
};

export default SwiperControls;