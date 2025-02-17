"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const ImageCarousel = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const images = [
    "/images/food/01.svg",
    "/images/food/02.svg",
    "/images/food/03.svg",
    "/images/food/04.svg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`overflow-hidden ${isMobile ? "w-[400px]" : "w-[426px]"} h-[294px]`}
    >
      {isMobile ? (
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-200"
          width={400}
          height={294}
        />
      ) : (
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-200"
          width={426}
          height={294}
        />
      )}
    </div>
  );
};

export default ImageCarousel;
