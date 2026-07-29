import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  className?: string; // Tambahkan ini
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "", // Tangkap className
}: ButtonProps) {
  const styles = {
    primary:
      "h-auto sm:h-11 flex-1 rounded-full inline-flex items-center justify-center whitespace-nowrap bg-[#E96A98] px-5 text-white hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl active:scale-95",

    secondary:
      "h-auto sm:h-11 flex-1 rounded-full whitespace-nowrap border border-gray-300 bg-white px-5 text-[#2D2433] hover:-translate-y-1 hover:border-pink-400 hover:bg-pink-50 active:scale-95",
  };

  const combinedClassName = `inline-flex items-center justify-center text-sm font-semibold transition-all duration-300 ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}