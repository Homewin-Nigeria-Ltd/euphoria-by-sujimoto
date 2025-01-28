'use client';

import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { SmoothScrollContext } from "./ScrollContext";

export default function LocomotiveScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scroll && scrollRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        class: "is-revealed",
        reloadOnContextChange: true,
        touchMultiplier: 2,
      });

      setScroll(locomotiveScroll);

      return () => {
        locomotiveScroll.destroy();
      };
    }

    return () => {};
  }, [scroll]);

  return (
    <SmoothScrollContext.Provider value={{ scroll }}>
      <div data-scroll-container ref={scrollRef}>
        {children}
      </div>
    </SmoothScrollContext.Provider>
  );
}
