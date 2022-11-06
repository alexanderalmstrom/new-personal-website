import { Suspense } from "react";
import Loading from "../../components/Loading";
import ProjectPage from "../../components/ProjectPage";

export default function Project({ params }: { params: { slug: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <ProjectPage slug={params.slug} />
    </Suspense>
  );
}
