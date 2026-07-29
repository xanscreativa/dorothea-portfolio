interface SectionBadgeProps {
  label: string;
  className?: string;
}

export default function SectionBadge({ label, className = "" }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-full border border-pink-200/80 bg-white/90 px-4 py-1.5 backdrop-blur-md shadow-[0_4px_20px_rgba(244,114,182,0.08)] ${className}`.trim()}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500" />
      </span>
      <span className="text-[10px] font-mono font-extrabold uppercase tracking-[0.3em] text-pink-600 sm:text-xs">
        {label}
      </span>
    </div>
  );
}
