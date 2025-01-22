import AboutEuphoriaSection from "./components/AboutEuphoriaSection";
import BookReservationForm from "./components/BookReservationForm";
import Footer from "./components/Footer";
import HeaderBg from "./components/HeaderBg";
import HeaderContent from "./components/HeaderContent";
import LayeredGallery from "./components/LayeredGallery";
import LocationSection from "./components/LocationSection";
import Navbar from "./components/Navbar";
import OurMenu from "./components/OurMenu";
import OurMission from "./components/OurMission";

export default function Home() {
  return (
    <main className='relative w-full min-h-screen overflow-x-hidden'>
    <Navbar />
      <div className='w-full'>
        <HeaderBg>
          <HeaderContent />
        </HeaderBg>
        <OurMission />
        <LocationSection />
        <LayeredGallery />
        <OurMenu />
        <BookReservationForm />
        <AboutEuphoriaSection />
        <Footer />
      </div>
    </main>
  );
}
