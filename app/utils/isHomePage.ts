import { HOME_PAGE_SLUG } from "../config";

export function isHomePage(slug: string) {
  return slug === HOME_PAGE_SLUG;
}
