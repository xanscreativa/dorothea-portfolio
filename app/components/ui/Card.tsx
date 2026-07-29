import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        group
        overflow-hidden
        rounded-[36px]
        bg-white
        shadow-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_40px_90px_rgba(45,36,51,.14)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}