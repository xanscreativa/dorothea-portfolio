type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600 transition hover:bg-pink-200">
      {children}
    </span>
  );
}