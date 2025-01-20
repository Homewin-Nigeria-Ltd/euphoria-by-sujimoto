"use client";

import Image from "next/image";
import React, { useState } from "react";

import headerBg01 from "../../../public/images/header-bg-01.webp";
import headerBg02 from "../../../public/images/header-bg-02.webp";
import headerBg03 from "../../../public/images/header-bg-03.webp";
import FloatingButton from "./FloatingButton";

import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Keyboard, Navigation } from "swiper/modules";
import CustomSwiperControls from "./CustomSwiperControls";

interface HeaderBgProps {
  children: React.ReactNode;
}

const HeaderBg = ({ children }: HeaderBgProps) => {
  const images = [
    {
      img: headerBg01,
    },
    {
      img: headerBg02,
    },
    {
      img: headerBg03,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const handleSlideChange = (index: number) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  // const [isBeginning, setIsBeginning] = useState(true);
  // const [isEnd, setIsEnd] = useState(false);

  return (
    <section className='w-full h-screen relative overflow-hidden'>
      <div className='absolute inset-0'>
        <Swiper
          className='w-screen h-screen flex justify-center items-center absolute top-0 left-0 z-5'
          keyboard={{ enabled: true }}
          navigation={{
            nextEl: ".header-swiper-button-next",
            prevEl: ".header-swiper-button-prev",
          }}
          modules={[Keyboard, Navigation, EffectFade, Autoplay]}
          allowTouchMove={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={800}
          slidesPerView={1}
          effect='fade'
          fadeEffect={{
            crossFade: true,
          }}
          onSwiper={(swiperInstance) => {
            setSwiper(swiperInstance);
          }}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.activeIndex);
          }}
          onInit={(swiper) => {
            setCurrentSlide(swiper.activeIndex);
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.img}
                alt='image'
                className='absolute inset-0 w-screen h-full object-cover'
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-header-dark-gradient opacity-90 z-10' />

      {/* controls and content */}
      <div className='relative z-20 w-full h-full'>
        <CustomSwiperControls
          totalSlides={images.length}
          currentSlide={currentSlide}
          onSlideClick={handleSlideChange}
        />
        <FloatingButton />
        {children}
      </div>
    </section>
  );
};

export default HeaderBg;
