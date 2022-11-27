import { use } from "react";
import Link from "next/link";
import { getPages } from "../services/contentful";
import { isHomePage } from "../utils";

export default function Nav() {
  const pages = use(getPages());

  return (
    <nav className="flex items-center gap-x-8">
      {pages.items.map((page) => (
        <Link
          key={page.sys.id}
          href={isHomePage(page.fields.slug) ? "/" : page.fields.slug}
        >
          {page.fields.name}
        </Link>
      ))}
    </nav>
  );
}
