import { ReactNode } from "react";
import WorkSidebar from "./WorkSidebar";
import { Project } from "@/app/types/project";

interface Props {
  project: Project;
  children: ReactNode;
}

export default function WorkLayout({
  project,
  children,
}: Props) {
  return (
    <section className="bg-[#FFFDFB]">

      <div className="mx-auto grid w-[92%] max-w-7xl gap-20 py-24 lg:grid-cols-[300px_1fr]">

        <WorkSidebar project={project} />

        <div>

          {children}

        </div>

      </div>

    </section>
  );
}