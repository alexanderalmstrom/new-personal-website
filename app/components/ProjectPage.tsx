import { use } from "react";
import { getProjectBySlug } from "../services/contentful";
import { renderRichRext } from "../utils";

export default function ProjectPage({ slug }: { slug: string }) {
  const project = use(getProjectBySlug(slug));

  return (
    <>
      <header className="text-center">
        <h1 className="text-6xl">{project.fields.name}</h1>
      </header>
      <section>{renderRichRext(project.fields.description)}</section>
    </>
  );
}
