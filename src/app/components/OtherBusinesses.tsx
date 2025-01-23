import OtherBusinessesSwiper from "./OtherBusinessesSwiper";

const OtherBusinesses = () => {
  return (
    <div className='w-screen h-auto z-20'>
      <div className='w-full h-full flex flex-col space-y-5'>
        <p className='font-bruno-ace text-[#2B2B2B] text-[28px] leading-[33.77px]'>
          Other Businesses
        </p>
        <OtherBusinessesSwiper />
      </div>
    </div>
  );
};
export default OtherBusinesses;
