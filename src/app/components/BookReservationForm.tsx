import Image from "next/image";
import customBrownArrow from "../../../public/icons/custom-brown-arrow.svg";
const BookReservationForm = () => {
  return (
    <div className='w-screen h-auto bg-black flex justify-center items-center p-20'>
      <div className='w-full h-full p-20 flex items-center border-[.8px] border-[#A85B5B] bg-book-reservation backdrop-blur-[9px] bg-[#777777] bg-opacity-[.06]'>
        <div className='flex flex-col space-y-20 w-full'>
          <div className='flex flex-col space-y-2'>
            <p className='bg-book-reservation-gradient text-transparent bg-clip-text font-federo text-[30px] leading-normal tracking-[6px] uppercase'>
              Book Reservation
            </p>
            <p className='font-metrophobic text-white text-[16px] leading-normal'>
              Be amongst the first few investors and get the urgent opportunity
              to book reservations
            </p>
          </div>
          <form>
            <div className='grid grid-cols-2 gap-20 items-end'>
              {/* full name */}
              <div className='flex flex-col space-y-8'>
                <label
                  htmlFor='fullname'
                  className='font-metrophobic text-white text-[20px] leading-normal'
                >
                  Full Name
                </label>
                <input
                  type='text'
                  placeholder='Enter full name'
                  className='font-metrophobic placeholder:text-[#D9D9D9] text-[18px] leading-[24px] placeholder:text-opacity-[0.5] bg-transparent focus:outline-none border-b-[1px] border-[#d9d9d9] border-opacity-[.21] pb-2 w-full'
                />
              </div>
              {/* phone number */}
              <div className='flex flex-col space-y-8'>
                <label
                  htmlFor='phone'
                  className='font-metrophobic text-white text-[20px] leading-normal'
                >
                  Phone Number
                </label>
                <input
                  type='text'
                  placeholder='Enter phone number'
                  className='font-metrophobic placeholder:text-[#D9D9D9] text-[18px] leading-[24px] placeholder:text-opacity-[0.5] bg-transparent focus:outline-none border-b-[1px] border-[#d9d9d9] border-opacity-[.21] pb-2 w-full'
                />
              </div>
              {/* Table unit */}
              <div className='flex flex-col space-y-8'>
                <label
                  htmlFor='unit'
                  className='font-metrophobic text-white text-[20px] leading-normal'
                >
                  Table Unit
                </label>
                <input
                  type='text'
                  placeholder='Enter number of table'
                  className='font-metrophobic placeholder:text-[#D9D9D9] text-[18px] leading-[24px] placeholder:text-opacity-[0.5] bg-transparent focus:outline-none border-b-[1px] border-[#d9d9d9] border-opacity-[.21] pb-2 w-full'
                />
              </div>
              {/* Email Address */}
              <div className='flex flex-col space-y-8'>
                <label
                  htmlFor='email'
                  className='font-metrophobic text-white text-[20px] leading-normal'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  placeholder='Enter email address'
                  className='font-metrophobic placeholder:text-[#D9D9D9] text-[18px] leading-[24px] placeholder:text-opacity-[0.5] bg-transparent focus:outline-none border-b-[1px] border-[#d9d9d9] border-opacity-[.21] pb-2 w-full'
                />
              </div>
              {/* How did you find us */}
              <div className='flex flex-col space-y-8'>
                <label
                  htmlFor='howYouFoundUs'
                  className='font-metrophobic text-white text-[20px] leading-normal'
                >
                  How did you find us?
                </label>
                <select
                  name='howDidYouFindUs'
                  className='font-metrophobic placeholder:text-[#D9D9D9] text-[18px] leading-[24px] placeholder:text-opacity-[0.5] bg-transparent focus:outline-none border-b-[1px] border-[#d9d9d9] border-opacity-[.21] pb-2 w-full'
                >
                  <option value='twitter'>Twitter</option>
                  <option value='instagram'>Instagram</option>
                  <option value='facebook'>Facebook</option>
                  <option value='linkedin'>LinkedIn</option>
                </select>
              </div>
              {/* submit button */}
              <button className='bg-[#25282a] bg-opacity-[.5] border-[.5px] border-[#A85B5B] backdrop-blur-[3.43] py-3 flex space-x-2 items-center justify-center'>
                <p className='font-cormorant-unicase text-[#A06569] uppercase text-[12px] leading-[151.5%] tracking-[1.92px]'>
                  Send request
                </p>
                <Image src={customBrownArrow} alt='custom brown arrow' />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default BookReservationForm;
