import Link from "next/link";
import { client } from "../services/contentful";

export default async function Header() {
  const pages = await client.getEntries({
    content_type: "page",
    select: ["fields.name", "fields.slug"],
    order: "sys.createdAt",
  });

  return (
    <header>
      <nav>
        {pages.items.map((page) => (
          <Link href={page.fields.slug === "home" ? "/" : page.fields.slug}>
            {page.fields.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
