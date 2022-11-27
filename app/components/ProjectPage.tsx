import { use } from "react";
import { gql } from "graphql-request";
import { GetProjectBySlugQuery } from "../gql/graphql";
import { client } from "../services/graphqlClient";
import { renderRichRext } from "../utils";

async function getProjectBySlug(slug: string) {
  const { projectCollection } = await client.request<GetProjectBySlugQuery>(
    gql`
      query GetProjectBySlug($slug: String!) {
        projectCollection(limit: 1, where: { slug: $slug }) {
          items {
            sys {
              id
            }
            name
            slug
            description {
              json
            }
          }
        }
      }
    `,
    {
      slug,
    }
  );

  return projectCollection?.items[0];
}

export default function ProjectPage({ slug }: { slug: string }) {
  const project = use(getProjectBySlug(slug));

  return (
    <>
      <header className="text-center">
        <h1 className="text-fluid-2">{project?.name}</h1>
      </header>
      <section>{renderRichRext(project?.description?.json)}</section>
    </>
  );
}
