import Image from "next/image";
import { Fragment } from "react";
import Marquee from "react-fast-marquee";
import affluentNeighbourhood from "../../../public/icons/affluent-neighbourhood.svg";
import fancyDownArrow from "../../../public/icons/fancy-arrow.svg";
import fancyStar from "../../../public/icons/fancy-star.svg";
import goldenLineLeft from "../../../public/icons/golden-line-left.svg";
import goldenLineRight from "../../../public/icons/golden-line-right.svg";
import goodRoadMap from "../../../public/icons/good-road-map.svg";
import oldIkoyi from "../../../public/icons/old-ikoyi.svg";
import securedArea from "../../../public/icons/secured-area.svg";
import serenity from "../../../public/icons/serenity.svg";
import urbanCity from "../../../public/icons/urban-city.svg";

const HeaderContent = () => {
  const categories = ["Pool", "Restaurant", "Lounge"];
  const features = [
    {
      title: "Urban City",
      icon: urbanCity,
    },
    {
      title: "Old Ikoyi",
      icon: oldIkoyi,
    },
    {
      title: "Good Road Map",
      icon: goodRoadMap,
    },
    {
      title: "Serenity",
      icon: serenity,
    },
    {
      title: "Secured Area",
      icon: securedArea,
    },
    {
      title: "Affluent Neighbourhood",
      icon: affluentNeighbourhood,
    },
  ];
  return (
    <div className='w-full h-full flex justify-center items-center'>
      {/* header content */}
      <div className='w-full p-10 flex flex-col'>
        <div className='flex flex-col space-y-20 justify-center items-center'>
          {/* top section */}
          <div className='flex flex-col space-y-5 justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='font-cormorant-unicase font-bold text-white text-[140px] leading-normal uppercase'>
                Euphoria
              </h1>
              <div className='flex justify-between items-center w-full'>
                {categories.map((category, index) => (
                  <Fragment key={index}>
                    <p
                      className='font-cormorant-unicase font-semibold text-white text-[32px] leading-normal uppercase'
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
            </div>
            <div className='flex space-x-8 items-center justify-center'>
              <Image src={goldenLineLeft} alt='golden line' />
              <p className='font-cormorant-unicase font-semibold text-white text-[20px] leading-normal uppercase'>
                By sujimoto
              </p>
              <Image src={goldenLineRight} alt='golden line' />
            </div>
          </div>

          {/* feature section */}
          <div className='grid grid-cols-6 gap-[30px] w-[60%] border-[.5px] border-white border-opacity-[.50] bg-white bg-opacity-[.1] backdrop-blur-[5px] px-20 py-5 rounded-[2px]'>
            {features.map((feature, index) => (
              <div
                className='flex flex-col space-y-3 justify-center items-center'
                key={index}
              >
                <Image src={feature.icon} alt={feature.title} />
                <p className='font-helvetica-neue text-white text-[8px] leading-[151.6%] tracking-[3.52%] text-center uppercase'>
                  {feature.title}
                </p>
              </div>
            ))}
          </div>

          {/* bottom content */}
          <div className='flex flex-col space-y-5 justify-center items-center cursor-pointer'>
            <div className='flex justify-center items-center px-1 py-4 border border-white rounded-[100px]'>
              <Image
                src={fancyDownArrow}
                alt='fancy down arrow'
                className='animate-bounce'
              />
            </div>
            <Marquee speed={100} gradient={false} pauseOnHover={true}>
              <p className='font-bruno-ace-sc text-white text-2xl leading-[151.6%] tracking-[10.68px] uppercase text-center px-4'>
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
