"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import logo from "../../../public/images/logo-loader.svg";
import splashScreenIllustration from "../../../public/images/splash-screen-illustration.png";

interface SplashScreenProps {
  children?: React.ReactNode;
}

const SplashScreen = ({ children }: SplashScreenProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const illustrationRef = useRef<HTMLImageElement | null>(null);
  const blackBgRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const mainWrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    const calculateScale = () => {
      if (typeof window !== "undefined") {
        const customWindow = window || undefined;
        const viewportWidth = customWindow.innerWidth;
        const logoWidth = logoRef.current?.getBoundingClientRect().width || 0;
        const scale = (viewportWidth * 1.25) / logoWidth;

        return scale;
      }
    };

    // Initial setup - make sure content is visible but behind splash
    gsap.set(contentRef.current, {
      opacity: 1,
      visibility: "visible",
    });

    gsap.set(mainWrapperRef.current, {
      height: "100vh",
    });

    // wait for logo to load before starting animation
    const startAnimations = () => {
      gsap.set(wrapperRef.current, {
        height: "0%",
      });

      gsap.set(logoRef.current, {
        scale: 1,
        transformOrigin: "center center",
      });

      tl.fromTo(
        wrapperRef.current,
        {
          height: "0%",
        },
        {
          height: "100%",
          duration: 1,
          ease: "none",
          delay: 0.1,
        },
      )
        .fromTo(
          logoRef.current,
          {
            scale: 1,
          },
          {
            scale: calculateScale(),
            duration: 1,
            ease: "back.out(1.2)",
          },
          "+=0.5", // Reduced delay
        )
        .to(
          logoRef.current,
          {
            scale: "+=2",
            duration: 0.8,
          },
          "+=0.5", // Reduced delay
        )
        .fromTo(
          wrapperRef.current,
          {
            height: "100%",
          },
          {
            height: "0%",
            duration: 0.8,
          },
          "<",
        )
        .to(
          illustrationRef.current,
          {
            display: "none",
            duration: 0.8,
          },
          "<",
        )
        .to(blackBgRef.current, {
          display: "none",
        })
        .to(mainWrapperRef.current, {
          height: "auto",
        });
    };

    // Start animations when component mounts and logo is loaded
    if (logoRef.current) {
      if (logoRef.current.complete) {
        startAnimations();
      } else {
        logoRef.current.onload = startAnimations;
      }
    }
  }, []);

  return (
    <div
      className="relative w-screen overflow-x-hidden bg-black"
      ref={mainWrapperRef}
    >
      {/* Main content - visible by default */}
      <div ref={contentRef} className="relative w-screen overflow-x-hidden">
        {children}
      </div>

      {/* Splash screen */}
      <div
        className="fixed inset-0 w-screen h-screen flex justify-center items-center bg-black z-50"
        ref={blackBgRef}
      >
        <Image
          src={splashScreenIllustration}
          alt="loader bottom vector"
          className="absolute inset-0 w-full h-full -z-5 opacity-[13%]"
          ref={illustrationRef}
        />
        <div
          className="w-full h-full flex justify-center items-center bg-[#66333B] overflow-hidden z-30"
          ref={wrapperRef}
        >
          <Image
            src={logo}
            alt="logo loader"
            className="z-10 w-auto h-auto"
            ref={logoRef}
          />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
