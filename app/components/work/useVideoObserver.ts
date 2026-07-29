"use client";

import { useEffect, useRef, useState } from "react";

interface UseVideoObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useVideoObserver<T extends HTMLVideoElement>({
  threshold = 0.35,
  rootMargin = "0px",
}: UseVideoObserverOptions = {}) {
  const videoRef = useRef<T | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry) return;

        if (!entry.isIntersecting) {
          video.pause();
          return;
        }

        if (!video.dataset.loaded) {
          video.load();
          video.dataset.loaded = "true";
        }

        void video.play().catch(() => {});
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [threshold, rootMargin]);

  const handleCanPlay = () => {
    setIsLoaded(true);
  };

  return {
    videoRef,
    isLoaded,
    handleCanPlay,
  };
}
