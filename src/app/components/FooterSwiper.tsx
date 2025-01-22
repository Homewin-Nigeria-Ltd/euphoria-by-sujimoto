"use client";

import footerSwiperImg01 from "../../../public/images/euphoria-brochure.svg";

import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectCards, Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FooterSwiper = () => {
  const slides = [
    {
      image: footerSwiperImg01,
    },
    {
      image: footerSwiperImg01,
    },
    {
      image: footerSwiperImg01,
    },
  ];

  return (
    <section className='w-full h-full relative'>
      <Swiper
        className='w-full h-full'
        keyboard={{ enabled: true }}
        navigation={{
          nextEl: ".footer-swiper-button-next",
          prevEl: ".footer-swiper-button-prev",
        }}
        modules={[Keyboard, Navigation, EffectCards]}
        effect={"cards"}
        allowTouchMove={true}
        speed={800}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              key={index}
              className='flex justify-center items-center h-full'
            >
              <Image src={slide.image} alt='gallery' key={index} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FooterSwiper;
