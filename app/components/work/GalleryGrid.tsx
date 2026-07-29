import GalleryCard from "./GalleryCard";

interface GalleryItem {
  image: string;
  title: string;
  index: number;
}

interface Props {
  items: GalleryItem[];
  onImageClick: (index: number) => void;
}

export default function GalleryGrid({
  items,
  onImageClick,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <GalleryCard
          key={item.index}
          image={item.image}
          title={item.title}
          index={item.index}
          onClick={() => onImageClick(item.index)}
        />
      ))}
    </div>
  );
}