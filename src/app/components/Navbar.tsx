"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import mobileMenuIconClosed from "../../../public/icons/mobile-menu-icon-closed.svg";
import mobileMenuIconOpen from "../../../public/icons/mobile-menu-icon-open.svg";
import logo from "../../../public/logo.svg";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      url: "/",
      clickable: true,
    },
    {
      name: "Book A Reservation",
      url: "/book-a-reservation",
      clickable: false,
    },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className='w-full z-50 flex justify-center bg-transparent absolute top-0 left-0'>
      <div
        className='w-full md:w-[90%] md:grid grid-cols-2 md:grid-cols-3 border-b-[.5px] border-white pt-5 md:pt-10 pb-5 px-5 relative items-center flex justify-between'
        style={{ zIndex: 20 }}
      >
        {/* links */}
        <div className='hidden md:flex space-x-10 items-center'>
          {links.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              className={`font-cormorant-unicase text-white text-[16px] leading-normal capitalize text-center ${
                link.clickable ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Link href='/' className='flex justify-center items-center'>
          <Image src={logo} alt='logo' className="animate-fade-in" />
        </Link>
        <Link
          href='/gallery'
          className='hidden md:flex justify-end items-center font-cormorant-unicase text-white text-[16px] leading-normal capitalize text-center pointer-events-none'
        >
          Gallery
        </Link>

        <div
          className={`md:hidden flex justify-center items-center p-3 animate-fade-in ${
            !mobileMenuOpen ? " bg-black bg-opacity-[20%] rounded-[4px]" : ""
          } cursor-pointer`}
          onClick={toggleMobileMenu}
        >
          {!mobileMenuOpen ? (
            <Image
              src={mobileMenuIconClosed}
              alt='mobile menu icon closed'
              className='md:hidden'
            />
          ) : (
            <Image
              src={mobileMenuIconOpen}
              alt='mobile menu icon open'
              className='md:hidden'
            />
          )}
        </div>
      </div>
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </div>
  );
};

export default Navbar;
