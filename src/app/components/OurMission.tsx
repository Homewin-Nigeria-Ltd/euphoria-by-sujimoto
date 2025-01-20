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
    <div className='w-screen h-[825px] flex justify-center items-center bg-[#25282A] relative'>
      <Image
        src={ourMissionTexture}
        alt='our mission texture'
        className='absolute top-0 left-0 w-full h-full object-cover z-[5]'
      />
      <Image
        src={euphoriaEmblem}
        alt='eurphoria emblem'
        className='absolute bottom-10 right-10'
      />
      <div className='w-full h-full flex flex-col space-y-10 p-20 relative z-10 justify-center items-center'>
        <div className='flex flex-col space-y-1'>
          <Image src={bigQuote} alt='big quote' />
          <p className='font-bruno-ace text-[22px] leading-[40px] tracking-[9.9px] uppercase text-white text-opacity-[.20] w-[95%]'>
            <span className='text-white'>Our mission</span> is simple: to
            provide luxury dining experiences that are accessible to everyone.
            We believe that luxury should not be exclusive to the elite, which
            is why we strive to offer high-quality cuisine at prices that
            won&apos;t break the bank.
          </p>
        </div>
        <div className='flex space-x-10'>
          <div className='flex items-start'>
            <p className='font-cormorant-unicase text-[32px] leading-[40px] font-bold uppercase text-white tracking-[14.4px]'>
              Why Eupho
              <span className='text-white text-opacity-40'>ria</span>
            </p>
            <Image
              src={whyEuphoriaImage}
              alt='why euphoria'
              className='relative -ml-[6rem] z-[-5]'
            />
          </div>
          <div className='flex flex-col space-y-10'>
            <div className='bg-white h-[1px] w-[460.53px]'></div>
            <div className='flex flex-col space-y-5'>
              {whyEuphoria.map((why, index) => (
                <div className='flex space-x-2 items-center' key={index}>
                  <p className='font-bruno-ace-sc text-white text-opacity-[.5] text-[14px] leading-[14px] uppercase'>
                    {why.index}
                  </p>
                  <p className='font-bruno-ace-sc text-white text-[22px] leading-[22px] uppercase'>
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
