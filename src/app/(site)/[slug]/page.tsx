import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div>
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent drop-shadow">
        {page.title}
      </h1>
      <div className="mt-10 text-lg text-gray-700">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
