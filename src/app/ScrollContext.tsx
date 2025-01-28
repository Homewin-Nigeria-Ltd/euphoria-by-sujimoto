import { createContext, useContext } from "react";
import LocomotiveScroll from "locomotive-scroll";

export const SmoothScrollContext = createContext<{
  scroll: LocomotiveScroll | null;
}>({
  scroll: null,
});

export function useLocoScroll() {
  return useContext(SmoothScrollContext);
}

export default SmoothScrollContext;
