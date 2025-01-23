import Image from "next/image";
import bigQuote from "../../../public/images/big-quote.svg";
import euphoriaEmblem from "../../../public/images/euphoria-emblem.svg";
import ourMissionTexture from "../../../public/images/our-mission-texture.svg";
import whyEuphoriaImage from "../../../public/images/why-euphoria.jpg";

const OurMission = () => {
  const whyEuphoria = [
    {
      index: "01",
      title: "Vibrant Lifestyle Experience",
    },
    {
      index: "02",
      title: "Unparalled Ambience",
    },
    {
      index: "03",
      title: "Unique and Affordable Drinks & Food",
    },
    {
      index: "04",
      title: "Unbelievable Cocktail and Menu",
    },
    {
      index: "05",
      title: "Exceptional Customers Service",
    },
  ];

  return (
    <div className='w-screen h-full md:h-[825px] flex justify-center items-center bg-[#25282A] relative our-mission-container py-10'>
      <Image
        src={ourMissionTexture}
        alt='our mission texture'
        className='absolute top-0 left-0 w-full h-full object-cover z-[5]'
      />
      <Image
        src={euphoriaEmblem}
        alt='eurphoria emblem'
        className='hidden md:block absolute bottom-1 md:bottom-10 right-1 md:right-10 scale-[.5] md:scale-[.85] translate-x-1/4 md:translate-x-0 translate-y-1/4 lg:translate-y-0 animate-rotate-infinite'
      />
      <div className='w-full h-full flex flex-col space-y-10 p-5 md:p-20 relative z-10 justify-center items-center'>
        <div className='flex flex-col space-y-3'>
          <Image src={bigQuote} alt='big quote' />
          <p className='font-bruno-ace text-[14px] md:text-[22px] leading-normal md:leading-[40px] md:tracking-[9.9px] uppercase text-white text-opacity-[.20] w-full md:w-[95%]'>
            <span className='text-white'>Our mission</span> is simple: to
            provide luxury dining experiences that are accessible to everyone.
            We believe that luxury should not be exclusive to the elite, which
            is why we strive to offer high-quality cuisine at prices that
            won&apos;t break the bank.
          </p>
        </div>
        <div className='flex flex-col md:flex-row md:space-x-10'>
          <div className='flex items-start'>
            <p className='font-cormorant-unicase text-[20px] md:text-[32px] md:leading-[40px] font-bold uppercase text-white tracking-[14.4px]'>
              Why Eupho
              <span className='text-white text-opacity-40'>ria</span>
            </p>
            <Image
              src={whyEuphoriaImage}
              alt='why euphoria'
              className='relative md:-ml-[6rem] z-[-5]'
            />
          </div>
          <div className='flex flex-col space-y-5 md:space-y-10'>
            <div className='bg-white h-[1px] w-auto md:w-[460.53px] mt-5 md:mt-0'></div>
            <div className='flex flex-col space-y-5'>
              {whyEuphoria.map((why, index) => (
                <div className='flex space-x-2 items-center' key={index}>
                  <p className='font-bruno-ace-sc text-white text-opacity-[.5] text-[12px] md:leading-[14px] uppercase'>
                    {why.index}
                  </p>
                  <p className='font-bruno-ace-sc text-white text-[12px] md:text-[22px] md:leading-[22px] uppercase'>
                    {why.title}
                  </p>
                  <p></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
