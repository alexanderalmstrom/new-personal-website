import { use } from "react";
import Link from "next/link";
import { getProjects } from "../services/contentful";

export default function ProjectNav({}) {
  const projects = use(getProjects());

  return (
    <nav className="flex justify-center gap-6">
      {projects.items.map(({ sys, fields: project }) => {
        const projectPath = `/projects/${encodeURIComponent(project.slug)}`;

        return (
          <Link key={sys.id} href={projectPath}>
            {project.name}
          </Link>
        );
      })}
    </nav>
  );
}
