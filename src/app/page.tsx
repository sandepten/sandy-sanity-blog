import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <main className="mx-auto min-h-screen max-w-5xl gap-4 py-20">
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Sandeep
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Sandy everyone! Check out my projects!
      </p>

      <h2 className="mt-24 text-3xl font-bold text-gray-700">My Projects</h2>
      <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project._id}
            className="rounded-lg border border-gray-500 p-3"
          >
            {project.imageUrl && (
              <Image
                src={project.imageUrl}
                alt={project.name}
                width={250}
                height={100}
                className="rounded-lg border border-gray-500 object-cover"
              />
            )}
            <h3 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text font-extrabold text-transparent">
              {project.name}
            </h3>
          </div>
        ))}
      </div>
    </main>
  );
}
