"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [mouse, setMouse] = useState({
    x: -100,
    y: -100,
  });
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
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      mediaQuery.removeEventListener("change", updateDesktop);
    };
  }, []);

  if (!isDesktop) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed z-[99999] h-5 w-5 rounded-full bg-[#E85D8E] transition-transform duration-75"
      style={{
        left: mouse.x - 10,
        top: mouse.y - 10,
      }}
    />
  );
}