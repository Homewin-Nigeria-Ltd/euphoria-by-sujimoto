import Image from "next/image";
import Link from "next/link";
import phoneIcon from "../../../public/icons/phone-icon.svg";
import footerBg from "../../../public/images/footer-grainy-bg.webp";
import sujimotoLogo from "../../../public/images/sujimoto-logo.svg";
import StackCarousel from "./StackCarousel";

import instagram from "../../../public/images/socials/instagram.svg";
import tiktok from "../../../public/images/socials/tiktok.svg";
import whatsapp from "../../../public/images/socials/whatsapp.svg";

const Footer = () => {
  const socials = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/euphoriarestaurantlagos?igsh=aWMyYzZkOXoxZmNz",
      logo: instagram,
    },
    // {
    //   name: "x(Twitter)",
    //   link: "#",
    //   logo: x,
    // },
    // {
    //   name: "Facebook",
    //   link: "#",
    //   logo: facebook,
    // },
    {
      name: "TikTok",
      link: "https://www.tiktok.com/@euphoria_bysujimoto?_t=ZS-90vHtgfWiqu&_r=1",
      logo: tiktok,
    },
    {
      name: "Whatsapp",
      link: "https://wa.me/2348115780020",
      logo: whatsapp,
    },
  ];
  return (
    <div className="w-screen h-full justify-center items-center bg-black bg-opacity-[60%] relative">
      <Image
        src={footerBg}
        alt="footer bg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="w-full h-full px-5 md:px-20 py-5 md:py-10 flex flex-col relative z-10 justify-end space-y-5 md:space-y-10">
        {/* stack gallery */}
        <div className="-mt-20 md:-mt-20 mb-20 relative w-full">
          <StackCarousel />
        </div>
        {/* logo & food and drinks qr code */}
        {/* <div className="flex flex-col lg:flex-row justify-between items-center">
          <Image
            src={logo}
            alt="logo"
            className="w-full md:max-w-min flex justify-center items-center scale-[.85] md:scale-1 mt-[5rem]"
          />
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:items-start md:space-x-20 border-2 border-white border-dashed rounded-[8px] p-5">
            <p className="font-bruno-ace text-white text-[16px] md:text-[20px] leading-[24.12px] hidden md:flex">
              Scan Food & Drinks menu
            </p>
            <div className="flex space-x-5 items-start">
              <div className="flex flex-col space-y-2 justify-center items-center">
                <Image src={foodQrCode} alt="food qr code" />
                <p className="font-bruno-ace text-white text-[16px] md:text-[20px] leading-[24.12px] uppercase">
                  Food
                </p>
              </div>
              <div className="flex flex-col space-y-2 justify-center items-center">
                <Image src={drinksQrCode} alt="drinks qr code" />
                <p className="font-bruno-ace text-white text-[16px] md:text-[20px] leading-[24.12px] uppercase">
                  Drinks
                </p>
              </div>
            </div>
          </div>
        </div> */}
        {/* booking contact */}
        <div className="w-full flex justify-center items-center">
          <div className="flex space-x-2 items-center justify-center">
            <Image src={phoneIcon} alt="phone icon" />
            <p className="font-bruno-ace text-white text-[16px] leading-[19.3px] uppercase text-center">
              Contact <a href="tel:+2348115780020">08115780020</a> for
              Reservations
            </p>
          </div>
        </div>
        {/* social links */}
        <div className="w-full flex flex-col space-y-10 justify-center items-center">
          <div className="flex flex-col space-y-2 justify-center items-center">
            <p className="font-bruno-ace text-white text-[18px] md:text-[32px] leading-[38px] md:leading-[60px] md:tracking-[14.24px] uppercase">
              Find Us
            </p>
            <div className="w-full flex justify-center items-center space-x-5 md:hidden">
              {socials.map((social, index) => (
                <a
                  href={social.link}
                  className="flex justify-center items-center p-3 bg-white rounded-full"
                  key={index}
                >
                  <Image
                    src={social.logo}
                    alt={social.name}
                    width={20}
                    height={20}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="w-full justify-center items-center hidden md:flex">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                className="font-bruno-ace text-white text-[16px] md:text-[20px] leading-[38px] md:leading-[60px] md:tracking-[14.24px] uppercase flex justify-center items-center border border-white px-5"
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* terms and conditions & copyright information */}
          <div className="grid grid-col-1 gap-5 md:gap-0 md:grid-cols-3 w-full items-center justify-center">
            <div className="flex flex-col md:flex-row md:space-x-5 items-center">
              <Link
                href="/terms-and-conditions"
                className="font-cormorant-unicase font-bold text-white text-[20px] leading-normal capitalize pointer-events-none"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy-policies"
                className="font-cormorant-unicase font-bold text-white text-[20px] leading-normal capitalize pointer-events-none"
              >
                Privacy Policies
              </Link>
            </div>
            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-3 items-center justify-center">
              <Image src={sujimotoLogo} alt="sujimoto logo" />
              <p className="font-cormorant-unicase font-bold text-white text-[20px] leading-normal capitalize">
                A Product of Sujimoto
              </p>
            </div>
            <p className="font-bruno-ace font-bold text-white text-[14px] leading-normal capitalize md:w-full flex items-center justify-center md:justify-end text-center px-[6rem] md:px-0">
              &copy;{new Date().getFullYear()} Sujimoto Group. All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
