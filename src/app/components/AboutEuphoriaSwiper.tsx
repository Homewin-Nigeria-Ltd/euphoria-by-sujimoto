"use client";

import Image from "next/image";
import { useState } from "react";
import giuliano from "../../../public/images/other-businesses/giuliano.svg";
import leonardo from "../../../public/images/other-businesses/leonardo.svg";
import queenAmina from "../../../public/images/other-businesses/queen-amina.svg";
import sujimotoPlaza from "../../../public/images/other-businesses/sujimoto-plaza.webp";
import sHotel from "../../../public/images/other-businesses/the-s-hotel.svg";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFade, Keyboard, Navigation } from "swiper/modules";
import prev from "../../../public/icons/custom-left-arrow.svg";
import next from "../../../public/icons/custom-right-arrow.svg";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AboutEuphoriaSwiper = () => {
  const otherBusinesses = [
    {
      name: "Leonardo By Sujimoto",
      location: "Banana Island, Lagos",
      banner: leonardo,
    },
    {
      name: "Queen Amina By Sujimoto",
      location: "Abuja",
      banner: queenAmina,
    },
    {
      name: "Sujimoto Plaza",
      location: "Banana Island, Lagos",
      banner: sujimotoPlaza,
    },
    {
      name: "Giuliano By Sujimoto",
      location: "Banana Island, Lagos",
      banner: giuliano,
    },
    {
      name: "The S-Hotel",
      location: "Banana Island, Lagos",
      banner: sHotel,
    },
  ];

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <section className='w-full h-[516px] md:h-[716px] relative'>
      <Swiper
        className='w-full h-full'
        keyboard={{ enabled: true }}
        navigation={{
          nextEl: ".about-euphoria-swiper-button-next",
          prevEl: ".about-euphoria-swiper-button-prev",
        }}
        modules={[Keyboard, Navigation, EffectFade]}
        onSlideChange={({ isBeginning, isEnd }) => {
          setIsBeginning(isBeginning);
          setIsEnd(isEnd);
        }}
        allowTouchMove={true}
        speed={800}
        slidesPerView={1}
        effect='fade'
        fadeEffect={{
          crossFade: true,
        }}
      >
        {otherBusinesses.map((business, index) => (
          <SwiperSlide key={index}>
            <div
              key={index}
              className='w-full h-full rounded-[10px] relative overflow-hidden'
            >
              <Image
                src={business.banner}
                alt={business.name}
                className='absolute inset-0 rounded-[10px] h-full'
              />
              <div className='absolute inset-0 w-full h-full bg-other-businesses-gradient'></div>

              <div className='absolute bottom-0 w-full flex flex-col space-y-2 justify-end p-5 md:p-10 h-fit'>
                <p className='font-sacramento text-white text-[14px] md:text-[24px] leading-normal'>
                  {business.location}
                </p>
                <p className='font-satista text-white text-[16px] md:text-[32px] leading-normal'>
                  {business.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='absolute inset-0 flex justify-between items-center z-10'>
        <button
          className={`about-euphoria-swiper-button-prev -translate-x-1/2 focus:outline-none ${
            isBeginning
              ? "opacity-0 pointer-events-none"
              : "opacity-1 pointer-events-auto"
          }`}
        >
          <Image src={prev} alt='prev' />
        </button>
        <button
          className={`about-euphoria-swiper-button-next translate-x-1/2 focus:outline-none ${
            isEnd
              ? "opacity-0 pointer-events-none"
              : "opacity-1 pointer-events-auto"
          }`}
        >
          <Image src={next} alt='next' />
        </button>
      </div>
    </section>
  );
};

export default AboutEuphoriaSwiper;
