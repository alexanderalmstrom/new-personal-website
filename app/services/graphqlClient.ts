import { GraphQLClient } from "graphql-request";

const space = process.env.CONTENTFUL_SPACE_ID as string;
const token = process.env.CONTENTFUL_ACCESS_TOKEN as string;
const env = process.env.CONTENTFUL_ENVIRONMENT
  ? `/environments/${process.env.CONTENTFUL_ENVIRONMENT as string}`
  : "";

export const client = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${space}${env}`,
  {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }
);
