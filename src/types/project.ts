import { type PortableTextBlock } from "next-sanity";

export type ProjectType = {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  imageUrl: string;
  url: string;
  content: PortableTextBlock[];
};
