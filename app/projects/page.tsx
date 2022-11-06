import { Suspense } from "react";
import Loading from "../components/Loading";
import ProjectList from "../components/ProjectList";

export default function Projects() {
  return (
    <>
      <header>
        <h1 className="text-6xl text-center">Projects</h1>
      </header>
      <Suspense fallback={<Loading />}>
        <ProjectList />
      </Suspense>
    </>
  );
}
