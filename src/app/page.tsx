import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <main className="flex min-h-screen flex-col gap-4 bg-black p-4 text-white">
      <h1 className="text-xl">My Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <h2>{project.name}</h2>
          </li>
        ))}
      </ul>
    </main>
  );
}
