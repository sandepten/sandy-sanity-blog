import { type ProjectType } from "@/types/project";
import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "3r36vov4",
  dataset: "production",
});

export async function getProjects() {
  const query = groq`*[_type == "project"] {
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    url,
    content
  }`;

  return client.fetch<ProjectType[]>(query);
}

export async function getProject(slug: string) {
  const query = groq`*[_type == "project" && slug.current == $slug][0] {
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    url,
    content
  }`;

  return client.fetch<ProjectType>(query, { slug });
}
