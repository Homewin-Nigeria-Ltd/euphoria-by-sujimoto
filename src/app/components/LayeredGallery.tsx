"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

import layeredImage01 from "../../../public/images/layered-panel/01.jpg";
import layeredImage02 from "../../../public/images/layered-panel/02.jpg";
import layeredImage03 from "../../../public/images/layered-panel/03.jpg";
import layeredImage04 from "../../../public/images/layered-panel/04.jpg";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const LayeredGallery = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const sections = gsap.utils.toArray<HTMLElement>("section");

      sections.forEach((section, i) => {
        // Skip the first section as it doesn't need to scroll over anything
        if (i === 0) return;

        ScrollTrigger.create({
          trigger: section,
          start: "top bottom",
          end: "+=100%",
          pin: sections[i - 1],
          pinSpacing: false,
          //   markers: true,
        });
      });

      // Create a separate ScrollTrigger for the last section to ensure it stays in view
      ScrollTrigger.create({
        trigger: sections[sections.length - 1],
        start: "top top",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        // markers: true,
      });
    },
    { scope: containerRef }
  );

  return (
    <div className='relative' ref={containerRef}>
      <section className='w-full h-screen flex justify-center items-center text-white relative'>
        <Image
          src={layeredImage01}
          alt='layered image 01'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 w-full h-full grid grid-cols-2'>
          <div className='col-span-1'></div>
          <div className='col-span-1 flex flex-col space-y-1 p-10'>
            <p className='font-cormorant-infant text-white text-[32px] leading-normal capitalize font-bold'>
              Serving smiles,
            </p>
            <p className='font-cormorant-infant text-white text-[32px] leading-normal capitalize font-bold'>
              One Plate At A Time
            </p>
          </div>
        </div>
      </section>
      <section className='w-full h-screen flex justify-center items-center text-white relative'>
        <Image
          src={layeredImage02}
          alt='layered image 02'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 w-full h-full grid grid-cols-2'>
          <div className='col-span-1'></div>
          <div className='col-span-1 flex justify-center items-center'>
            <p className='font-cormorant-infant font-bold text-white text-[32px] leading-normal capitalize'>
              Quality is our Recipe
            </p>
          </div>
        </div>
      </section>
      <section className='w-full h-screen flex justify-center items-center text-white relative'>
        <Image
          src={layeredImage03}
          alt='layered image 03'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 w-full h-full grid grid-cols-2'>
          <div className='col-span-1 flex justify-center items-center p-10'>
            <p className='font-cormorant-infant font-bold text-white text-[32px] leading-normal capitalize w-[90%] mt-[8rem]'>
              We set the perfect ambiance for your meal. Whether you&apos;re
              enjoying a romantic dinner for two or a lively gathering with
              friends, our music adds an extra layer of enjoyment to your dining
              experience.
            </p>
          </div>
          <div className='col-span-1'></div>
        </div>
      </section>
      <section className='w-full h-screen flex justify-center items-center text-white relative'>
        <Image
          src={layeredImage04}
          alt='layered image 04'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 w-full h-full grid grid-cols-2'>
          <div className='col-span-1'></div>
          <div className='col-span-1 flex justify-center items-start px-10 py-[15rem]'>
            <p className='font-cormorant-infant font-bold text-white text-[32px] leading-normal capitalize w-[85%]'>
              Each Note is a brushstroke on the canvas of the soul, painting
              intricate landscapes of joy, laughter and good food.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LayeredGallery;
