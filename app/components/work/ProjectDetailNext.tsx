import Link from "next/link";
import type { PortfolioCollection } from "@/app/data/portfolio";

interface Props {
  nextProject: PortfolioCollection;
}

export default function ProjectDetailNext({ nextProject }: Props) {
  return (
    <section className="border-t border-[#F0E6EA] py-12">
      <div className="mx-auto flex w-[92%] max-w-7xl items-center justify-between gap-4 text-sm uppercase tracking-[0.35em] text-[#6B6570] sm:text-base">
        <span>Next project</span>
        <Link
          href={`/work/${nextProject.slug}`}
          className="font-semibold text-[#2D2433] transition-colors duration-300 hover:text-[#D86C98]"
        >
          {nextProject.title} →
        </Link>
      </div>
    </section>
  );
}
