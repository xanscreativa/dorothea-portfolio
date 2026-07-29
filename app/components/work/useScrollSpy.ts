"use client";

import { useEffect, useState } from "react";

export default function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(
          (entry) => entry.isIntersecting
        );

        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}