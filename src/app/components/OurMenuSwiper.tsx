"use client";

import Image from "next/image";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Keyboard, Navigation } from "swiper/modules";
import prev from "../../../public/icons/our-menu-left-arrow.svg";
import next from "../../../public/icons/our-menu-right-arrow.svg";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bottleWater from "../../../public/images/drinks/bottle-water.svg";
import budweiser from "../../../public/images/drinks/budweiser.svg";
import redLabel from "../../../public/images/drinks/red-label.jpg";

const OurMenuSwiper = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(1);
  //   const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const drinksMenu = [
    {
      name: "Red Label",
      image: redLabel,
    },
    {
      name: "Budweiser",
      image: budweiser,
    },
    {
      name: "Bottle Water",
      image: bottleWater,
    },
  ];
  return (
    <section className='w-full h-full relative'>
      <Swiper
        className='w-full h-full'
        keyboard={{ enabled: true }}
        navigation={{
          nextEl: ".about-euphoria-swiper-button-next",
          prevEl: ".about-euphoria-swiper-button-prev",
        }}
        modules={[Keyboard, Navigation]}
        // onSwiper={(swiperInstance) => {
        // //   setSwiper(swiperInstance);
        // }}
        onSlideChange={(swiper) => {
          const { isBeginning, isEnd } = swiper;
          setIsBeginning(isBeginning);
          setIsEnd(isEnd);
          setCurrentSlide(swiper.activeIndex);
        }}
        onInit={(swiper) => {
          setCurrentSlide(swiper.activeIndex);
        }}
        allowTouchMove={true}
        speed={800}
        slidesPerView={2}
      >
        {drinksMenu.map((drink, index) => (
          <SwiperSlide key={index}>
            <div
              key={index}
              className='flex justify-center items-center h-full'
            >
              <Image
                src={drink.image}
                alt={drink.name}
                key={index}
                className={`${
                  currentSlide === index ? "scale-[1]" : "scale-[.65]"
                }`}
              />
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

export default OurMenuSwiper;
