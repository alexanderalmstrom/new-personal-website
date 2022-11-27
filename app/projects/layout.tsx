import ProjectNav from "../components/ProjectNav";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid py-12 gap-y-12">
      <ProjectNav />
      <article className="flex flex-col gap-y-12 xl:container mx-auto px-6">
        {children}
      </article>
    </main>
  );
}
