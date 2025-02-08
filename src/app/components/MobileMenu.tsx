"use client";

import gsap from "gsap";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useCallback } from "react";
import mobileMenuIconOpen from "../../../public/icons/mobile-menu-icon-open.svg";
import mobileMenuGrainyBg from "../../../public/images/mobile-menu-grainy-bg.svg";
import sujimoto from "../../../public/images/sujimoto-white.svg";
import logo from "../../../public/logo.svg";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const router = useRouter();
  const menuRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const linksRef = useRef<Array<HTMLDivElement | null>>([]);
  const bottomContentRef = useRef(null);

  const navLinks = [
    {
      index: "01",
      name: "Home",
      link: "/",
    },
    {
      index: "02",
      name: "Gallery",
      link: "/gallery",
    },
    {
      index: "03",
      name: "Book A Reservation",
      link: "/book-a-reservation",
    },
  ];

  const playCloseAnimation = useCallback(() => {
    return new Promise<void>((resolve) => {
      try {
        const tl = gsap.timeline({
          onComplete: resolve,
        });

        tl.to(linksRef.current, {
          autoAlpha: 0,
          y: 20,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.in",
        })
          .to(
            bottomContentRef.current,
            {
              autoAlpha: 0,
              y: 20,
              duration: 0.3,
              ease: "power2.in",
            },
            "-=0.2",
          )
          .to(
            contentRef.current,
            {
              autoAlpha: 0,
              y: 20,
              duration: 0.3,
              ease: "power2.in",
            },
            "-=0.2",
          )
          .to(bgRef.current, {
            autoAlpha: 0,
            duration: 0.3,
          })
          .set(menuRef.current, { autoAlpha: 0 });
      } catch (error) {
        console.error("Animation error: ", error);
        resolve();
      }
    });
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const tl = gsap.timeline();

    gsap.set([contentRef.current, bottomContentRef.current], {
      autoAlpha: 0,
      y: 20,
    });
    gsap.set(linksRef.current, { autoAlpha: 0, y: 20 });

    tl.fromTo(bgRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 })
      .to(contentRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.2",
      )
      .to(
        bottomContentRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3",
      );

    gsap.set(menuRef.current, { autoAlpha: 1 });

    return () => {
      tl.kill();
    };
  }, [isOpen]);

  const handleClose = async (link: string): Promise<void> => {
    try {
      await playCloseAnimation();
      onClose();
      router.push(link);
    } catch (error) {
      console.error("Error during close: ", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="w-screen h-screen fixed inset-0 z-50 invisible"
    >
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 bg-black p-10">
        <Image
          src={mobileMenuGrainyBg}
          alt="mobile menu grainy bg"
          priority
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
      </div>

      {/* Content */}
      <div ref={contentRef} className="w-full h-full relative p-10 z-10">
        <div className="w-full h-fit absolute inset-0 flex justify-between items-center p-5 border-b border-white">
          <Image src={logo} alt="logo" />
          <button
            className="md:hidden"
            onClick={async () => {
              await playCloseAnimation();
              onClose();
            }}
            aria-label="Close menu"
          >
            <Image
              src={mobileMenuIconOpen}
              alt="mobile menu icon open"
              className="cursor-pointer"
            />
          </button>
        </div>

        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex flex-col space-y-12 mt-[10rem]">
            {navLinks.map((link, index) => (
              <div
                className="flex space-x-5 items-end"
                key={index}
                ref={(el) => {
                  linksRef.current[index] = el;
                }}
              >
                <p className="font-bruno-ace text-white text-[14px] leading-[16.88px]">
                  {link.index}
                </p>
                <div
                  onClick={() => handleClose(link.link)}
                  className="font-bruno-ace text-white text-[24px] leading-[28.94px] uppercase cursor-pointer"
                >
                  <p>{link.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            ref={bottomContentRef}
            className="flex flex-col space-y-5 justify-center items-center z-10 mb-10"
          >
            <button className="font-cormorant-unicase font-bold text-white text-[16px] leading-[19.38px] text-center uppercase py-5 bg-view-menu-button-gradient w-full">
              View Menu
            </button>
            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-3 items-center justify-center">
              <Image
                src={sujimoto}
                alt="sujimoto logo"
                className="w-[56.33px]"
              />
              <p className="font-cormorant-unicase font-bold text-white text-[20px] leading-[24.22px] capitalize">
                A Product of Sujimoto
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
