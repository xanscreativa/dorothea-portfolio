"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hover, setHover] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateDesktop = () => setIsDesktop(mediaQuery.matches);

    updateDesktop();
    mediaQuery.addEventListener("change", updateDesktop);

    if (!mediaQuery.matches) {
      return () => mediaQuery.removeEventListener("change", updateDesktop);
    }

    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const enter = () => setHover(true);
    const leave = () => setHover(false);

    const interactiveElements = document.querySelectorAll("a,button");

    window.addEventListener("mousemove", move);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });

      mediaQuery.removeEventListener("change", updateDesktop);
    };
  }, []);

  if (!isDesktop) {
    return null;
  }

  return (
    <>
      <motion.div
        animate={{
          x: position.x - (hover ? 28 : 10),
          y: position.y - (hover ? 28 : 10),
          width: hover ? 56 : 20,
          height: hover ? 56 : 20,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[999999] rounded-full border border-pink-500"
      />

      <motion.div
        animate={{
          x: position.x - 3,
          y: position.y - 3,
        }}
        transition={{
          type: "spring",
          stiffness: 900,
          damping: 40,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[999999] h-1.5 w-1.5 rounded-full bg-pink-500"
      />
    </>
  );
}