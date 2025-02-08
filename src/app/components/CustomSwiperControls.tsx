import Image from "next/image";
import fancyHeaderArrow from "../../../public/icons/fancy-header-arrow.svg";

interface CustomSwiperControlsProps {
  totalSlides: number;
  currentSlide: number;
  onSlideClick: (index: number) => void;
}

const formatNumber = (num: number): string => {
  return num.toString().padStart(2, "0");
};

const CustomSwiperControls = ({
  totalSlides,
  currentSlide,
  onSlideClick,
}: CustomSwiperControlsProps) => {
  return (
    <div className='w-full h-full absolute inset-0 hidden md:block'>
      <div className='flex flex-col space-y-3 h-full justify-center'
      />
        {Array.from({ length: totalSlides }, (_, index) => (
          <div className='flex space-x-5 items-center' key={index}>
            <Image
              src={fancyHeaderArrow}
              alt='fancy header arrow'
              className={`${
                currentSlide === index ? "opacity-1" : "opacity-0"
              }`}
            />
            <p
              className={`font-bruno-ace text-white cursor-pointer ${
                currentSlide === index
                  ? "text-[32px]"
                  : "text-[16px] text-opacity-[.5]"
              }`}
              key={index}
              onClick={() => onSlideClick(index)}
            >
              {currentSlide === index ? (
                <span>
                  {formatNumber(index + 1)}
                  <span className='text-[16px]'>/0{totalSlides}</span>
                </span>
              ) : (
                formatNumber(index + 1)
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSwiperControls;
