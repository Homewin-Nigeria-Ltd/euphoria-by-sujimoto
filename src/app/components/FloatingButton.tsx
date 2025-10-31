import Link from "next/link";

const FloatingButton = () => {
  return (
    <Link
      href="https://wa.me/2348115780020"
      target="_blank"
      rel="noopener noreferrer"
      className="font-cormorant-unicase font-bold text-white text-[14px] md:text-[16px] leading-normal text-center uppercase absolute right-0 bottom-[5rem] md:bottom-[3rem] px-5 md:px-10 py-3 md:py-4 bg-custom-gradient z-10 animate-fade-in"
    >
      Book Reservation
    </Link>
  );
};

export default FloatingButton;
