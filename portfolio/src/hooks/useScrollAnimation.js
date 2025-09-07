import { useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { threshold, once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return [ref, controls];
};

export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * speed;
      element.style.transform = `translateY(${parallax}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return ref;
};
