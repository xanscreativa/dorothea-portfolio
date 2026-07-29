"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function Counter({
  end,
  suffix = "",
  duration = 1200,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        let start = 0;

        const step = Math.ceil(end / (duration / 16));

        const timer = setInterval(() => {
          start += step;

          if (start >= end) {
            start = end;
            clearInterval(timer);
          }

          setCount(start);
        }, 16);
      },
      {
        threshold: 0.4,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [duration, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}