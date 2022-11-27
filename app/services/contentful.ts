import { createClient } from "contentful";

export const host = process.env.CONTENTFUL_PREVIEW
  ? "preview.contentful.com"
  : "cdn.contentful.com";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  environment: (process.env.CONTENTFUL_ENVIRONMENT as string) ?? "master",
  host,
});

export const getPages = async () => {
  return await client.getEntries({
    content_type: "page",
    select: ["fields.name", "fields.slug"],
    order: "sys.createdAt",
  });
};

export const getProjects = async () => {
  return await client.getEntries({
    content_type: "project",
    select: ["fields.name", "fields.slug", "fields.media"],
    order: "sys.createdAt",
  });
};

export const getProjectBySlug = async (slug: string) => {
  const project = await client.getEntries({
    content_type: "project",
    select: ["fields.name", "fields.slug", "fields.description"],
    order: "sys.createdAt",
    "fields.slug[match]": slug,
  });

  return project.items[0];
};
