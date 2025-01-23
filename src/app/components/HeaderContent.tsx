"use client";
import Image from "next/image";
import { Fragment } from "react";
import Marquee from "react-fast-marquee";
import affordableFoodAndDrinks from "../../../public/icons/affordable-food-and-drinks.svg";
import culinaryExperience from "../../../public/icons/culinary-experience.svg";
import fancyDownArrow from "../../../public/icons/fancy-arrow.svg";
import fancyStar from "../../../public/icons/fancy-star.svg";
import goldenLineLeft from "../../../public/icons/golden-line-left.svg";
import goldenLineRight from "../../../public/icons/golden-line-right.svg";
import goodAmbience from "../../../public/icons/good-ambience.svg";
import premiumEntertainment from "../../../public/icons/premium-entertainment.svg";
import securedArea from "../../../public/icons/secured-area.svg";
import worldClassChef from "../../../public/icons/world-class-chef.svg";

import { Link } from "react-scroll";

const HeaderContent = () => {
  const categories = ["Pool", "Restaurant", "Lounge"];
  const features = [
    {
      title: "Culinary Experience",
      icon: culinaryExperience,
    },
    {
      title: "Premium Entertainment",
      icon: premiumEntertainment,
    },
    {
      title: "Good Ambience",
      icon: goodAmbience,
    },
    {
      title: "Affordable Food & Drinks",
      icon: affordableFoodAndDrinks,
    },
    {
      title: "Secured Area",
      icon: securedArea,
    },
    {
      title: "World Class Chef",
      icon: worldClassChef,
    },
  ];
  return (
    <div className='w-full h-full flex justify-center items-center'>
      {/* header content */}
      <div className='w-full h-full p-10 flex flex-col justify-start items-center'>
        <div className='flex flex-col space-y-10 md:space-y-20 justify-center items-center mt-[8rem]'>
          {/* top section */}
          <div className='flex flex-col space-y-2 justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='font-cormorant-unicase font-bold text-white text-[65px] md:text-[140px] leading-normal uppercase animate-fade-in'>
                Euphoria
              </h1>
              <div className='flex flex-col space-y-5'>
                <div className='flex space-x-2 md:space-x-5 justify-center md:justify-center items-center w-full animate-fade-in'>
                  {categories.map((category, index) => (
                    <Fragment key={index}>
                      <p
                        className='font-cormorant-unicase font-semibold text-white text-[16px] md:text-[32px] leading-normal uppercase'
                        key={index}
                      >
                        {category}
                      </p>
                      {!(index === categories.length - 1) && (
                        <Image src={fancyStar} alt='fancy star' />
                      )}
                    </Fragment>
                  ))}
                </div>
                <div className='flex space-x-5 md:space-x-8 items-center justify-center animate-fade-in'>
                  <Image src={goldenLineLeft} alt='golden line' />
                  <p className='font-cormorant-unicase font-semibold text-white text-[14px] md:text-[20px] leading-normal uppercase'>
                    By sujimoto
                  </p>
                  <Image src={goldenLineRight} alt='golden line' />
                </div>
              </div>
            </div>
          </div>

          {/* feature section */}
          <div className='grid grid-cols-3 md:grid-cols-6 gap-5 md:gap-[7rem] w-full md:w-[60%] border-[.5px] border-white border-opacity-[.50] bg-white bg-opacity-[.1] backdrop-blur-[5px] px-5 md:px-20 py-3 rounded-[2px] animate-fade-in'>
            {features.map((feature, index) => (
              <div
                className='flex flex-col space-y-3 justify-center items-center'
                key={index}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  className='aniamate-fade-in'
                />
                <p className='font-bruno-ace text-white text-[8px] md:leading-[12.12px] md:tracking-[44%] text-center uppercase flex justify-center items-center'>
                  {feature.title}
                </p>
              </div>
            ))}
          </div>

          {/* bottom content */}
          <div className='flex flex-col space-y-10 justify-center items-center cursor-pointer absolute bottom-[6.5rem] md:bottom-[5.5rem]'>
            <div className='flex justify-center items-center px-1 py-3 md:py-4 border border-white rounded-[50px] md:rounded-[100px] animate-fade-in'>
              <Link
                activeClass='active'
                to='our-mission-container'
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
              >
                <Image
                  src={fancyDownArrow}
                  alt='fancy down arrow'
                  className='animate-bounce'
                />
              </Link>
            </div>
            <Marquee speed={100} gradient={false} pauseOnHover={true}>
              <p className='font-bruno-ace-sc text-white text-1xl md:text-2xl md:leading-[151.6%] md:tracking-[10.68px] uppercase text-center px-4'>
                The Taste of Luxury: Bites of peace Cuisine
              </p>
              <p className='font-bruno-ace-sc text-white text-1xl md:text-2xl md:leading-[151.6%] md:tracking-[10.68px] uppercase text-center px-4'>
                The Taste of Luxury: Bites of peace Cuisine
              </p>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
