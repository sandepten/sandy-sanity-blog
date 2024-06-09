import { type PortableTextBlock } from "next-sanity";

export type PageType = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};
