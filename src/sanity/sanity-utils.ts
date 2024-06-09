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

  return client.fetch<
    Array<{
      _id: string;
      _createdAt: string;
      name: string;
      slug: string;
      imageUrl: string;
      url: string;
      content: string;
    }>
  >(query);
}