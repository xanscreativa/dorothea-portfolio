"use client";

import { useEffect, useRef, useState, RefObject } from "react";

interface UseVideoVisibilityOptions {
  threshold?: number;
}

interface UseVideoVisibilityReturn {
  containerRef: RefObject<HTMLDivElement | null>;
  videoRef: RefObject<HTMLVideoElement | null>;
  isVideoLoaded: boolean;
  isPlaying: boolean;
  handleCanPlay: () => void;
}

export function useVideoVisibility(
  options: UseVideoVisibilityOptions = {}
): UseVideoVisibilityReturn {
  const { threshold = 0.3 } = options;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;

    if (!container || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(false));
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const handleCanPlay = () => {
    setIsVideoLoaded(true);
  };

  return {
    containerRef,
    videoRef,
    isVideoLoaded,
    isPlaying,
    handleCanPlay,
  };
}
