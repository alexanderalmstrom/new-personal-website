export default function Project({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1 className="text-2xl">Project page</h1>
      <p>{params.slug}</p>
    </main>
  );
}
