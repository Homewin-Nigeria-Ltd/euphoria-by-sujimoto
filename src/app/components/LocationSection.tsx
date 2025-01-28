import Image from "next/image";

import affluentNeighbourhood from "../../../public/icons/affluent-neighbourhood.svg";
import goodRoadMap from "../../../public/icons/good-road-map.svg";
import oldIkoyi from "../../../public/icons/old-ikoyi.svg";
import securedArea from "../../../public/icons/secured-area.svg";
import serenity from "../../../public/icons/serenity.svg";
import urbanCity from "../../../public/icons/urban-city.svg";

import locationServiceBg from "../../../public/images/location-service-bg.webp";

const LocationSection = () => {
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
    <div className='w-full min-h-screen flex justify-center items-center p-5 md:p-20 relative overflow-x-hidden'>
      <div className='flex flex-col space-y-2 md:space-y-5 px-5 md:px-8 py-5 md:py-12 bg-location-top-box-gradient absolute top-0 left-10 z-10 rounded-bl-[10px] border border-white border-opacity-[.40]'>
        <p className='font-bruno-ace text-white text-[14px] md:text-[16px] leading-normal md:tracking-[7.12px] uppercase'>
          location
        </p>
        <p className='font-cormorant-infant font-bold text-white text-[14px] italic leading-normal tracking-[6.23px] uppercase'>
          Ikoyi
        </p>
      </div>
      <Image
        src={locationServiceBg}
        alt='banner'
        className='absolute inset-0 w-screen h-full object-cover'
        priority
      />
      <div className='absolute inset-0 bg-location-section-gradient'></div>
      {/* inner content */}
      <div className='flex p-5 md:p-10 justify-center items-center bg-white bg-opacity-[0.08] backdrop-blur-[13.45px] w-full md:w-[80%] mt-[8rem] md:mt-[15rem]'>
        <div className='flex flex-col space-y-5 md:space-y-10 justify-center items-center'>
          <p className='font-bruno-ace-sc text-white text-[12px] md:text-[14.391px] leading-[28px] md:leading-[35.854px] md:tracking-[6.404px] uppercase'>
            Nestled in the heart of the iconic Old Ikoyi, Lagos, our restaurant
            offers a dining experience like no other. From the moment you step
            through our doors, you&apos;ll be immersed in an atmosphere of
            African luxury, where every detail has been carefully curated to
            ensure your comfort and satisfaction. Conveniently located in Ikoyi,
            Euphoria is easily accessible from all parts of the city. Whether
            you&apos;re a local resident or just passing through, we invite you
            to dine in luxury at your leisure.
          </p>

          {/* feature section */}
          <div className='grid grid-cols-3 md:grid-cols-6 gap-5 md:gap-[30px] px-5 md:px-20 py-5 rounded-[2px]'>
            {features.map((feature, index) => (
              <div
                className='flex flex-col space-y-1 justify-center items-center'
                key={index}
              >
                <Image src={feature.icon} alt={feature.title} />
                <p className='font-helvetica-neue text-white text-[8px] leading-[151.6%] tracking-[3.52%] text-center uppercase'>
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
