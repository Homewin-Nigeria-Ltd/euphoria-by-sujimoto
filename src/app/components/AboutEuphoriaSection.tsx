"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import arrowRight from "../../../public/icons/arrow-right.svg";
import aboutBg from "../../../public/images/about-euphoria-bg.svg";
import aboutEuphoriaGrainyBg from "../../../public/images/about-euphoria-grainy-bg.svg";
import aboutEuphoriaSpiral from "../../../public/images/about-right-floral.svg";
import africanPropertyAward from "../../../public/images/african-property-awards.svg";
import sijibomi from "../../../public/images/sijibomi-ogundele.svg";
import AboutEuphoriaSwiper from "./AboutEuphoriaSwiper";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const AboutEuphoriaSection = () => {
  const ourPhilosophy = [
    {
      title: "Diligence",
      description:
        "Lorem Ipsum is simply dum my text of the printing and typesetting industry.",
    },
    {
      title: "Integrity",
      description:
        "Lorem Ipsum is simply dum my text of the printing and typesetting industry.",
    },
    {
      title: "Excellence",
      description:
        "Lorem Ipsum is simply dum my text of the printing and typesetting industry.",
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const awardImageRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "80% bottom",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    tl.fromTo(
      awardImageRef.current,
      { yPercent: "100" },
      {
        yPercent: "1",
        duration: 0.3,
      }
    );
  });

  return (
    <div
      className='w-full h-auto relative flex justify-center items-center py-20 bg-white px-5 md:px-20'
      ref={containerRef}
    >
      <Image
        src={aboutEuphoriaGrainyBg}
        alt='about bg'
        layout='fill'
        objectFit='cover'
        className='absolute top-0 right-0 object-cover object-center w-full h-full'
      />
      <Image
        src={aboutBg}
        alt='about bg'
        layout='fill'
        objectFit='cover'
        className='absolute top-0 right-0 object-cover object-center w-full h-full opacity-[.5]'
      />
      <Image
        src={aboutEuphoriaSpiral}
        alt='spiral'
        className='absolute right-0 bottom-[10rem]'
      />
      <Image
        src={africanPropertyAward}
        ref={awardImageRef}
        alt='africa property award'
        className='absolute bottom-0 right-10 hidden md:block'
      />
      <div className='w-full flex flex-col space-y-5 md:space-y-10'>
        <div className='flex flex-col space-y-10 md:space-y-0 md:flex-row justify-between space-x-0 md:space-x-5'>
          {/* left side */}
          <div className='w-full md:w-[45%] h-fit relative flex items-center px-0 md:px-5 py-0 md:py-5'>
            <AboutEuphoriaSwiper />
          </div>

          {/* right side */}
          <div className='flex flex-col space-y-5 items-start w-full md:w-[55%] px-0 md:px-10'>
            <h2 className='font-raleway font-bold text-[#262626] text-[20px] leading-[22.6px] tracking-[.4px] border-b-[1.8px] border-[#A85B5B] w-full pb-5'>
              About Sujimoto
            </h2>
            <div className='flex flex-col space-x-1 md:space-y-3'>
              <h3 className='font-raleway font-bold text-black text-[20px] md:text-[40px] leading-[22.5px] md:leading-[44.5px] md:tracking-[.8px]'>
                One destination, endless possibility
              </h3>
              <p className='font-raleway text-[16px] md:text-[20px] font-semibold tracking-[.4px] text-black'>
                - a product of sujimoto
              </p>
            </div>
            <div className='flex flex-col space-y-5'>
              <p className='font-raleway text-black  text-[14px] md:text-[18px] md:text-[14pxpx] leading-normal md:leading-[27.50px] font-medium w-full'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, . It was popularised in the
                1960s with the release of Letraset
              </p>
            </div>
            <div className='flex flex-col space-y-5 items-start'>
              <div className='flex space-x-2 justify-center items-center'>
                <p className='font-raleway text-[20px] font-bold leading-[18.882px] tracking-[.6px] text-black'>
                  Our Philosophy
                </p>
                <span className='w-[46.576px] h-[2.518px] bg-[#A85B5B] block'></span>
              </div>
              <div className='grid grid-cols-1 gap-5 md:grid-cols-3 md:space-x-5'>
                {ourPhilosophy.map((item, index) => (
                  <div
                    className='flex flex-col space-y-1 md:space-y-3'
                    key={index}
                  >
                    <p className='font-raleway uppercase text-[14px] md:text-[16px] font-semibold md:tracking-[.48px] text-black'>
                      {item.title}
                    </p>
                    <p className='font-raleway text-[14px] leading-[20px] text-black w-[80%]'>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className='mt-5'>
                <button className='bg-about-euphoria-learn-more-gradient px-8 py-4 flex space-x-2 items-center relative md:mt-10 focus:outline-none'>
                  <p className='font-raleway font-medium text-white text-[13.362px] leading-normal'>
                    Learn More
                  </p>
                  <Image src={arrowRight} alt='arrow right' />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full justify-center items-center flex flex-col space-y-5'>
          <p className='w-full md:w-[65%] font-satista text-black text-[22px] md:text-[32px] leading-[28px] md:leading-[44px] capitalize'>
            Come for the food, stay for the ambiance, and indulge in a dining
            experience like no other. At Euphoria, we invite you to taste the
            difference and savour the moment with every flavourful bite.
          </p>
          <div className='flex flex-col md:flex-row lg:space-x-5 items-center pb-[8rem] md:pb-[8rem]'>
            <Image src={sijibomi} alt='sijibomi ogundele' />
            <div className='flex flex-col space-y-2 items-center md:items-end'>
              <p className='font-arty-signature text-black text-[84px] leading-[70px]'>
                Dr. Sujibomi Ogundele LLB
              </p>
              <p className='font-satista text-black text-[16px] md:text-[20px] leading-normal'>
                GMD, Sujimoto Group
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEuphoriaSection;
