"use client";

import type { PortfolioCollection } from "@/app/data/portfolio";
import PortfolioCard from "./PortfolioCard";

interface MasonryGridProps {
  projects: PortfolioCollection[];
  onOpen?: (project: PortfolioCollection) => void;
}

export default function MasonryGrid({ projects, onOpen }: MasonryGridProps) {
  return (
    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <PortfolioCard key={project.id} project={project} onOpen={onOpen} />
      ))}
    </div>
  );
}
