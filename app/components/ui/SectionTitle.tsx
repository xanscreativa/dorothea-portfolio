type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionTitle({
  title,
  subtitle,
  center = false,
}: Props) {
  return (
    <div className={center ? "text-center" : ""}>
      {subtitle && (
        <p className="uppercase tracking-[0.35em] text-pink-500">
          {subtitle}
        </p>
      )}

      <h2 className="mt-4 text-5xl font-black text-[#2D2433]">
        {title}
      </h2>
    </div>
  );
}