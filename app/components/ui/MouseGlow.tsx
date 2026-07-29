"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
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

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      mediaQuery.removeEventListener("change", updateDesktop);
    };
  }, []);

  if (!isDesktop) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    >
      <div
        className="absolute h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          background: "rgba(236,72,153,.35)",
        }}
      />
    </div>
  );
}