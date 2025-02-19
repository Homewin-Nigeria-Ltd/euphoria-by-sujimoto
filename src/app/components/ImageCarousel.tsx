"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const ImageCarousel = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [mounted, setMounted] = useState(false);

  const images = [
    "/images/food/01.svg",
    "/images/food/02.svg",
    "/images/food/03.svg",
    "/images/food/04.svg",
    "/images/food/05.svg",
    "/images/food/06.svg",
    "/images/food/07.svg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [mounted, images.length]);

  if (!mounted) {
    return null;
  }

  const dimensions = {
    width: isMobile ? 400 : 426,
    height: 294,
  };

  return (
    <div className={`relative overflow-hidden w-full h-[294px] max-w-[426px]`}>
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-200 ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
          width={dimensions.width}
          height={dimensions.height}
          priority={index === 0}
          // onLoadingComplete={() => setIsLoading(false)}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
