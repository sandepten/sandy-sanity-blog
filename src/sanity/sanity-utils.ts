import { type PageType } from "@/types/page";
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

export async function getPages() {
  const query = groq`*[_type == "page"] {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
  }`;

  return client.fetch<Omit<PageType, "content">[]>(query);
}

export async function getPage(slug: string) {
  const query = groq`*[_type == "page" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content
  }`;

  return client.fetch<PageType>(query, { slug });
}
