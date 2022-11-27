import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [process.env.SCHEMA_URL as string]: {
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
  },
  documents: ["app/**/*.tsx"],
  ignoreNoDocuments: true,
  generates: {
    "./app/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
