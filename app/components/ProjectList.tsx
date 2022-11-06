import { use } from "react";
import Link from "next/link";
import { getProjects } from "../services/contentful";

export default function ProjectList() {
  const projects = use(getProjects());

  return (
    <section>
      {projects.items.map((project) => {
        return (
          <Link key={project.sys.id} href={`/projects/${project.fields.slug}`}>
            {project.fields.name}
          </Link>
        );
      })}
    </section>
  );
}
