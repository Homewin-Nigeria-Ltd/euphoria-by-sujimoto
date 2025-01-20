import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.svg";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Book A Reservation",
      url: "/book-a-reservation",
    },
  ];
  return (
    <div className='w-full z-20 flex justify-center bg-transparent absolute top-0 left-0'>
      <div
        className='w-[90%] grid grid-cols-3 border-b-[.5px] border-white pt-10 pb-5 px-5 relative'
        style={{ zIndex: 20 }}
      >
        {/* links */}
        <div className='flex space-x-10 items-center'>
          {links.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              className='font-cormorant-unicase text-white text-[16px] leading-normal capitalize text-center'
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Link href='/' className='flex justify-center items-center'>
          <Image src={logo} alt='logo' />
        </Link>
        <Link
          href='/gallery'
          className='flex justify-end items-center font-cormorant-unicase text-white text-[16px] leading-normal capitalize text-center'
        >
          Gallery
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
