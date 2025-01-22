import Image from "next/image";
import Link from "next/link";
import footerBg from "../../../public/images/footer-grainy-bg.webp";
import logo from "../../../public/images/footer-logo.svg";
import sujimotoLogo from "../../../public/images/sujimoto-logo.svg";
import StackCarousel from "./StackCarousel";
const Footer = () => {
  const socials = [
    {
      name: "Instagram",
      link: "#",
    },
    {
      name: "Facebook",
      link: "#",
    },
    {
      name: "Whatsapp",
      link: "#",
    },
  ];
  return (
    <div className='w-screen h-[928px] justify-center items-center bg-black bg-opacity-[60%] relative'>
      <Image
        src={footerBg}
        alt='footer bg'
        className='absolute inset-0 w-full h-full object-cover'
      />
      <div className='w-full h-full px-5 md:px-20 py-5 md:py-10 flex flex-col relative z-10 justify-end space-y-10 md:space-y-20'>
        {/* <FooterSwiper /> */}
        <div className='md:-mt-20 relative'>
          <StackCarousel />
        </div>

        <Image
          src={logo}
          alt='logo'
          className='w-full md:max-w-min flex justify-center items-center scale-[.85] md:scale-1 mt-[5rem]'
        />
        <div className='w-full flex flex-col space-y-10 justify-center items-center'>
          <p className='font-bruno-ace text-white text-[22px] md:text-[32px] leading-[38px] md:leading-[60px] md:tracking-[14.24px] uppercase'>
            Contact us
          </p>
          <div className='grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-3 w-full justify-center items-center'>
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className='font-bruno-ace text-white text-[22px] md:text-[32px] leading-[38px] md:leading-[60px] md:tracking-[14.24px] uppercase flex justify-center items-center border border-r-white'
              >
                {social.name}
              </a>
            ))}
          </div>
          <div className='grid grid-col-1 gap-5 md:gap-0 md:grid-cols-3 w-full'>
            <div className='flex flex-col md:flex-row md:space-x-5 items-center'>
              <Link
                href='/terms-and-conditions'
                className='font-cormorant-unicase font-bold text-white text-[20px] leading-normal capitalize'
              >
                Terms & Conditions
              </Link>
              <Link
                href='/privacy-policies'
                className='font-cormorant-unicase font-bold text-white text-[20px] leading-normal capitalize'
              >
                Privacy Policies
              </Link>
            </div>
            <div className='flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-3 items-center justify-center'>
              <Image src={sujimotoLogo} alt='sujimoto logo' />
              <p className='font-cormorant-unicase font-bold text-white text-[20px] leading-normal capitalize'>
                A Product of Sujimoto
              </p>
            </div>
            <p className='font-cormorant-unicase font-bold text-white text-[20px] leading-normal capitalize w-full flex justify-center md:justify-end items-center'>
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
