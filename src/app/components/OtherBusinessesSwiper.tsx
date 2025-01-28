"use client";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import motobills from "../../../public/images/motobills.svg";
import silencio from "../../../public/images/silencio.svg";
import sujimotoResidences from "../../../public/images/sujimoto-residences.svg";

import Image from "next/image";

const OtherBusinessesSwiper = () => {
  const otherBusinesses = [
    {
      title: "Silencio",
      icon: silencio,
      link: "https://www.silenciong.com/",
    },
    {
      title: "Sujimoto Residences",
      icon: sujimotoResidences,
      link: "https://sujimotoresidence.com/",
    },
    {
      title: "Motobills",
      icon: motobills,
      link: "https://motobills.com/",
    },
    {
      title: "Motobills",
      icon: motobills,
      link: "https://motobills.com/",
    },
  ];

  return (
    <Swiper
      // slidesPerView={3.5}
      // spaceBetween={10}
      draggable={true}
      // centeredSlides={true}
      grabCursor={true}
      className='w-full h-auto other-businesses-swiper justify-start z-20'
      // loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      keyboard={{ enabled: true }}
      modules={[Keyboard, Navigation, Autoplay]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
        1920: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {otherBusinesses.map((business, index) => (
        <SwiperSlide key={index} style={{ zIndex: -1 }}>
          <div
            className='flex flex-col space-y-2 h-[300px] bg-white rounded-[8px] p-2'
            key={index}
          >
            <div className='w-full h-[230px] bg-[#F9F9F9] flex justify-center items-center rounded-[8px]'>
              <Image src={business.icon} alt={business.title} />
            </div>
            <div className='w-full py-5 bg-[#F9F9F9] flex justify-between items-center rounded-[8px] px-5'>
              <p className='font-bruno-ace text-black text-[20px] leading-[28.94px]'>
                {business.title}
              </p>
              <a
                href={business.link}
                target='_blank'
                className='font-satista text-black text-[14px] leading-[16.8px] py-2 px-5 rounded-[4px] border border-[#A85B5B] min-w-max flex justify-center items-center'
              >
                View website
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OtherBusinessesSwiper;
