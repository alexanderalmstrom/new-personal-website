import { use } from "react";
import Link from "next/link";
import { getProjects } from "../services/contentful";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projects = use(getProjects());

  return (
    <main className="lg:grid lg:grid-cols-12">
      <aside className="lg:col-span-2 p-6">
        <nav className="flex flex-col">
          {projects.items.map((project) => {
            return (
              <Link
                key={project.sys.id}
                href={`/projects/${project.fields.slug}`}
              >
                {project.fields.name}
              </Link>
            );
          })}
        </nav>
      </aside>
      <article className="lg:col-span-10 p-6 flex flex-col gap-y-12">
        {children}
      </article>
    </main>
  );
}
