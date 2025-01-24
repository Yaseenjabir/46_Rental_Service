import { Post } from "@/app/utils/utils";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import "./style.css";

export async function generateStaticParams() {
  const query = `
  *[_type == "blog"]{
  "slug" : slug.current
}`;

  const data = await client.fetch(query);
  return data.map((item: Post) => ({ params: { slug: item.slug } }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const query = `*[_type == 'blog' && slug.current == "${slug}"]{
  title,
  summary,
  _createdAt,
    image,
    content,
    by->{
      name,
      about,
      image
    }
}[0]`;

  const data: Post = await client.fetch(query);

  return (
    data !== undefined && (
      <article className="mt-5 py-10 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8 max-w-[720px] mx-auto bg-white">
        {/* Blog Title */}
        <h1 className="text-xl px-1 lg:text-3xl font-semibold text-dark dark:text-light text-headings">
          {data.title}
        </h1>

        {/* Featured Image */}
        <Image
          // src={
          //   "https://alweamtransport.com/assets/images/2024/02/17/Red%20White%20Modern%20Car%20Rental%20Banner%20Landscape.jpg"
          // }
          src={urlFor(data.image).width(720).height(350).url()}
          width={500}
          height={500}
          layout="responsive"
          alt="AI for everyone"
          className="rounded"
        />

        {/* Blog Summary Section */}
        <section>
          <h2 className="text-xl xs:text-2xl md:text-2xl font-bold text-tropicalIndigo uppercase text-accentDarkPrimary">
            Summary
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-justify text-dark/80 dark:text-light/80">
            {data.summary}
          </p>
        </section>

        {/* Author Section (Image & Bio) */}
        <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
          <Image
            src={urlFor(data.by.image).width(200).url()}
            alt="author"
            width={200}
            height={200}
            className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-dark dark:text-light">
              {data.by.name}
            </h3>
            <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
              {data.by.about}
            </p>
          </div>
        </section>

        {/* Main Body of Blog */}
        <section className="section-portable">
          <PortableText value={data.content} />
        </section>
      </article>
    )
  );
}
