import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

export const renderRichRext = (document: Document) => {
  return documentToReactComponents(document);
};
