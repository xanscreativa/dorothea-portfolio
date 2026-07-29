interface Props {
  title?: string;
  subtitle?: string;
}

export default function GalleryHeader({
  title = "Selected Visuals",
  subtitle = "Gallery",
}: Props) {
  return (
    <div className="mb-16">
      <p className="text-xs uppercase tracking-[0.35em] text-pink-500">
        {subtitle}
      </p>

      <h2 className="mt-4 text-5xl font-black leading-tight text-[#2D2433]">
        {title}
      </h2>
    </div>
  );
}