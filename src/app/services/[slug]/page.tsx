import DynamicCrumbs from "@/app/fleets/[slug]/DynamicCrumbs";
import AutoPlay from "./Slider";
import { client } from "@/sanity/lib/client";
import { Image, PortableTextBlock } from "sanity";
import { PortableText } from "next-sanity";

export interface Res {
  images: Image[];
  title: string;
  content: PortableTextBlock;
  belongsTo: string;
}

export async function generateStaticParams() {
  const query = `*[_type == 'services']{
  "slug" : slug.current
  }`;

  const res = await client.fetch(query);

  return res.map((item) => ({ params: { slug: item.slug } }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const query = `*[_type == 'services' && slug.current == "${slug}"]
{
title,
belongsTo,
}[0]`;

  const data = await client.fetch(query);

  return {
    title: data.belongsTo,
    description: data.title,
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const query = `*[_type == 'services' && slug.current == "${slug}"]
{
title,
images,
belongsTo,
content
}[0]`;

  const res: Res = await client.fetch(query);

  return (
    <>
      <DynamicCrumbs
        data={{
          firstCrumb: { link: "/services", name: "Services" },
          secondCrumb: { link: "", name: res.belongsTo },
        }}
      />
      <section className="w-full py-10 px-5 mx-auto max-w-[1140px]">
        <div className="text-center flex flex-col gap-2">
          <p className="text-lg text-tropicalIndigo font-semibold">
            We Offer the Best
          </p>
          <h1 className="text-2xl font-bold text-headings">{res.title}</h1>
        </div>
        <article className="my-10 font-semibold bg-white rounded-lg p-5 shadow-lg">
          <h1 className="font text-2xl text-gray-600">{res.belongsTo}</h1>
          <hr className="bg-gray-600 my-5" />
          <div className="mb-10">
            <AutoPlay res={res} />
          </div>
          <section className="section-portable">
            <PortableText value={res.content} />
          </section>
        </article>
      </section>
    </>
  );
}
