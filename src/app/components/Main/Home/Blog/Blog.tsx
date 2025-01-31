import { Post, truncateText } from "@/app/utils/utils";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatDistanceToNow } from "date-fns";

export async function generateStaticParams() {
  const posts = await fetchPosts(); // Get the first 3 posts
  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}

async function fetchPosts() {
  const query = `
*[_type == 'blog'] | order(_createdAt desc)[0..2]{
category,
summary,
by->{name},
image,
_createdAt,
title,
"slug" : slug.current
}`;
  const res = await client.fetch(query);

  return res;
}
export default async function Blog() {
  const posts: Post[] = await fetchPosts();

  return (
    <section className="py-10 px-5">
      <div className="text-center flex flex-col items-center justify-center gap-2">
        <h3 className="text-tropicalIndigo text-sm font-semibold">BLOG</h3>
        <h1 className="text-headings text-3xl font-bold">
          Recent Post From Our Blog
        </h1>
      </div>

      <div className="w-full grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {posts.length > 0 &&
          posts.map((item: Post, index: number) => {
            return (
              <div
                key={index}
                className="w-full hover:scale-105 transition-all ease-in-out duration-300"
              >
                <Image
                  src={urlFor(item.image).width(300).height(200).url()}
                  alt="blog-post"
                  height={200}
                  width={300}
                  layout="responsive"
                  className="w-full rounded-t-lg"
                />

                <div className="bg-white py-3 px-5 flex flex-col gap-3 rounded-b-xl shadow-lg">
                  <h4 className="font-semibold text-gray-600">
                    {formatDistanceToNow(item._createdAt)} ago
                  </h4>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="font-bold text-tropicalIndigo text-xl cursor-pointer"
                  >
                    {truncateText(item.title, 45)}
                  </Link>
                  <p className="text-gray-600">
                    {truncateText(item.summary, 250)}
                  </p>
                </div>
              </div>
            );
          })}
        {/* <div className="w-full hover:scale-105 transition-all ease-in-out duration-300">
          <Image
            src="https://alweamtransport.com/assets/images/2024/09/16/Sports%20Club%20Bus%20Rental%20Dubai-400x300.jpg"
            alt="blog-post"
            height={200}
            width={300}
            layout="responsive"
            className="w-full rounded-t-lg"
          />
          <div className="bg-white py-3 px-5 flex flex-col gap-4 rounded-b-xl shadow-lg">
            <h4 className="font-semibold text-gray-600">4 months ago</h4>
            <h1 className="font-bold text-tropicalIndigo text-2xl cursor-pointer">
              Sports Event Group Transportation: Rliable and Secure Charter Bus
              in Dubai
            </h1>
            <p className="text-gray-600">
              AL Weam Bus Rental provide you all kinds of passenger transport
              services in Dubai and to other emirates of United Arab Emirates.
              If you are looking for sport team bus with driver Dubai for
              sporting
            </p>
          </div>
        </div>
        <div className="w-full hover:scale-105 transition-all ease-in-out duration-300">
          <Image
            src="https://alweamtransport.com/assets/images/2024/09/13/Staff%20Transportation%20in%20Dubai-400x300.jpg"
            alt="blog-post"
            height={200}
            width={300}
            layout="responsive"
            className="w-full rounded-t-lg"
          />
          <div className="bg-white py-3 px-5 flex flex-col gap-4 rounded-b-xl shadow-lg">
            <h4 className="font-semibold text-gray-600">4 months ago</h4>
            <h1 className="font-bold text-tropicalIndigo text-2xl cursor-pointer">
              Staff Transportation Dubai: Explore How much Staff Pick and Drop
              Service is Beneficial
            </h1>
            <p className="text-gray-600">
              Incorporated worldwide, employee transportation is an activity
              that is becoming critical by the day, given the rapid growth. It
              has been shown that ensuring that there are no delays in their
              arriva
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
