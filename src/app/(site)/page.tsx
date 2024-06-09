import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <main>
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
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="space-y-1 rounded-lg border border-gray-500 p-3 transition-transform duration-300 ease-in-out hover:scale-105 hover:border-gray-900"
          >
            {project.imageUrl && (
              <Image
                src={project.imageUrl}
                alt={project.name}
                width={250}
                height={100}
                className="h-40 w-full rounded-lg border border-gray-500 object-cover"
              />
            )}
            <h3 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text font-extrabold text-transparent">
              {project.name}
            </h3>
          </Link>
        ))}
      </div>
    </main>
  );
}
