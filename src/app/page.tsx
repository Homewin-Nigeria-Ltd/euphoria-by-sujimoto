"use client";

import AboutEuphoriaSection from "./components/AboutEuphoriaSection";
// import BookReservationForm from "./components/BookReservationForm";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import Footer from "./components/Footer";
import HeaderBg from "./components/HeaderBg";
import HeaderContent from "./components/HeaderContent";
import LayeredGallery from "./components/LayeredGallery";
import LocationSection from "./components/LocationSection";
import Navbar from "./components/Navbar";
import OurMenu from "./components/OurMenu";
import OurMission from "./components/OurMission";
// import SplashScreen from "./components/SplashScreen";
import dynamic from "next/dynamic";

const SplashScreen = dynamic(() => import("../app/components/SplashScreen"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <SplashScreen>
        <Navbar />
        <HeaderBg>
          <HeaderContent />
        </HeaderBg>
        <OurMission />
        <LocationSection />
        <LayeredGallery />
        <OurMenu />
        {/* <BookReservationForm /> */}
        <AboutEuphoriaSection />
        <FloatingWhatsapp />
        <Footer />
      </SplashScreen>
    </main>
  );
}
