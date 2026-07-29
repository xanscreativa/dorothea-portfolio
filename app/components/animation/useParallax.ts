"use client";

import { useEffect, useState } from "react";

export default function useParallax(speed = 0.3) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY * speed);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return offset;
}