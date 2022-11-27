import { use } from "react";
import Link from "next/link";
import { getProjects } from "../services/contentful";
import ContentfulImage from "./contentful/Image";

export default function ProjectList() {
  const projects = use(getProjects());

  return (
    <section className="grid grid-cols-2 gap-8">
      {projects.items.map(({ sys, fields: project }) => {
        const {
          url,
          details: { image },
        } = project.media.fields.file;

        return (
          <div className="relative flex flex-col gap-4">
            <ContentfulImage
              src={url}
              width={image.width}
              height={image.height}
              alt={project.name}
            />
            <Link
              key={sys.id}
              href={`/projects/${project.slug}`}
              className="after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full"
            >
              {project.name}
            </Link>
          </div>
        );
      })}
    </section>
  );
}
