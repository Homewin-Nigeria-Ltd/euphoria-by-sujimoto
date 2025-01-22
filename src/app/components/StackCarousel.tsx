"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import brochure01 from "../../../public/images/euphoria-brochure-01.webp";
import brochure02 from "../../../public/images/euphoria-brochure-02.webp";
import brochure03 from "../../../public/images/euphoria-brochure-03.webp";
import brochure04 from "../../../public/images/euphoria-brochure-04.jpg";

import prev from "../../../public/icons/our-menu-left-arrow.svg";
import next from "../../../public/icons/our-menu-right-arrow.svg";

const StackCarousel = () => {
  const slides = [
    {
      id: 1,
      image: brochure01,
    },
    {
      id: 2,
      image: brochure02,
    },
    {
      id: 3,
      image: brochure03,
    },
    {
      id: 3,
      image: brochure04,
    },
  ];

  const DRAG_THRESHOLD = 100; // Pixels to trigger card move to back

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const dragStartPos = useRef(0);
  const touchStartPos = useRef(0);

  const handleDragStart = (e: React.MouseEvent, index: number) => {
    if (index !== currentIndex || isAnimating) return;

    e.preventDefault();
    setIsDragging(true);
    dragStartPos.current = e.clientX;
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const offset = e.clientX - dragStartPos.current;
    setDragOffset(offset);
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent, index: number) => {
    if (index !== currentIndex || isAnimating) return;
    setIsDragging(true);
    touchStartPos.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const offset = e.touches[0].clientX - touchStartPos.current;
    setDragOffset(offset);
  };

  // Unified end handler for both mouse and touch
  const handleDragEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);
    setIsAnimating(true);

    if (Math.abs(dragOffset) > DRAG_THRESHOLD) {
      const direction = dragOffset > 0 ? -1 : 1;
      setCurrentIndex(
        (prev) => (prev + direction + slides.length) % slides.length
      );
      setTimeout(() => {
        setDragOffset(0);
        setIsAnimating(false);
      }, 500);
    } else {
      setDragOffset(0);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  };

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, slides.length]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating) return;

      switch (e.key) {
        case "ArrowLeft":
          handlePrev();
          break;
        case "ArrowRight":
          handleNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, isAnimating]); // Only re-add listener when isAnimating changes

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + slides.length) % slides.length;
    let rotation = 0;
    if (diff > 0) {
      rotation = diff % 2 === 0 ? 8 : -8;
    }

    if (index === currentIndex && (isDragging || isAnimating)) {
      return {
        transform: `translateX(${dragOffset}px)`,
        zIndex: slides.length + 1,
        transition: isDragging ? "none" : "all 0.5s ease-in-out",
        position: "absolute",
        width: "100%",
        height: "100%",
        cursor: "grab",
      };
    }

    return {
      transform: `rotate(${rotation}deg)`,
      zIndex: slides.length - diff,
      opacity: diff >= 4 ? 0 : 1 - diff * 0.08,
      transition: "all 0.5s ease-in-out",
      position: "absolute",
      width: "100%",
      height: "100%",
      transformOrigin: "center center",
      cursor: index === currentIndex ? "grab" : "default",
      boxShadow: `0 ${2 + diff * 2}px ${4 + diff * 2}px rgba(0,0,0,${
        0.1 + diff * 0.05
      })`,
    };
  };

  return (
    <div
      className='w-full h-full flex justify-center items-center'
      role='region'
      aria-label='Image carousel'
      tabIndex={0}
    >
      <div className='w-full h-full flex flex-col space-y-12 md:space-y-20 justify-center items-center relative'>
        <div
          className='relative w-full md:w-[661px] h-[220px] md:h-[378px]'
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleDragEnd}
          onTouchCancel={handleDragEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className='absolute w-full h-full shadow-lg cursor-grab'
              style={getCardStyle(index) as React.CSSProperties}
              onMouseDown={(e) => handleDragStart(e, index)}
              onTouchStart={(e) => handleTouchStart(e, index)}
              onDragStart={(e) => e.preventDefault()}
            >
              <Image
                src={slide.image}
                alt='slide'
                fill
                draggable='false'
                className='object-cover pointer-events-none select-none border-[2px] border-white shadow-lg'
                sizes='661px'
              />
            </div>
          ))}
        </div>

        <div className='w-full h-[220px] justify-between items-center absolute inset-0 px-[10rem] hidden md:flex'>
          <button
            onClick={handlePrev}
            className={`stack-carousel-prev -translate-x-1/2 focus:outline-none`}
          >
            <Image src={prev} alt='prev' />
          </button>
          <button
            onClick={handleNext}
            className={`stack-carousel-next translate-x-1/2 focus:outline-none `}
          >
            <Image src={next} alt='next' />
          </button>
        </div>

        <button className='font-cormorant-unicase font-bold text-white text-[14px] md:text-[16px] leading-normal text-center uppercase px-10 py-3 md:py-4 bg-custom-gradient z-10'>
          Add your Experience
        </button>
      </div>
    </div>
  );
};

export default StackCarousel;
