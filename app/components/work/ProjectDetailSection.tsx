import { ReactNode } from "react";

interface Props {
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function ProjectDetailSection({
  label,
  title,
  children,
  className = "",
}: Props) {
  return (
    <section className={`rounded-[32px] bg-white/80 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.04)] ${className}`}>
      <p className="text-xs uppercase tracking-[0.35em] text-pink-500">
        {label}
      </p>
      <h2 className="mt-6 text-3xl font-black leading-tight text-[#2D2433] sm:text-4xl">
        {title}
      </h2>
      <div className="mt-6 text-base leading-8 text-[#6B6570] sm:text-lg">
        {children}
      </div>
    </section>
  );
}
