import { FaClock, FaUser } from "react-icons/fa6";
import BreadCrumbs from "../components/Main/BreadCrumbs/BreadCrumbs";
import Image from "next/image";
import Link from "next/link";
import Loader from "../utils/Loader";
import { Suspense } from "react";
import { Post } from "../utils/utils";
import { urlFor } from "@/sanity/lib/image";
import { Metadata } from "next";
import { formatDistanceToNow } from "date-fns";

import Filter from "./Filter";

interface BlogContentProps {
  posts: Post[];
  page: number;
  totalPages: number;
  category: string;
}

async function fetchPosts() {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
  const res = await fetch(`${baseUrl}/api/blogPosts`);
  if (!res.ok) {
    throw new Error("Failed to fetch blog posts");
  }
  const data = await res.json();
  return data;
}

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ page: string; category: string }>;
}) {
  const { page, category } = await searchParams;

  const currentPage = parseInt(page as string) || 1;
  const limit = 4;

  const posts: Post[] = await fetchPosts();

  const filteredPosts = category
    ? posts.filter((post: Post) => post.category === category)
    : posts;

  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / limit);

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const postsForPage = filteredPosts.slice(startIndex, endIndex);

  return (
    <main className="w-full flex flex-col items-center justify-center">
      <BreadCrumbs data={{ title: "Blog", crumb: "blog" }} />
      <Suspense fallback={<Loader height={10} width={10} boxSize={80} />}>
        <BlogContent
          posts={postsForPage}
          page={currentPage}
          totalPages={totalPages}
          category={category}
        />
      </Suspense>
    </main>
  );
}

function BlogContent({ posts, page, totalPages, category }: BlogContentProps) {
  return (
    <section className="w-full max-w-[720px] lg:max-w-[900px] py-10 px-5">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl text-gray-500">Blog</h1>
        {/* Dropdown for Filters */}
        <Filter />
      </div>

      {/* Blog Posts */}
      <div className="flex flex-col w-full items-center justify-center gap-10 mt-10">
        {posts &&
          posts.length > 0 &&
          posts.map((item: Post, index) => (
            <div key={index}>
              <Image
                src={urlFor(item.image).width(1200).height(600).url()}
                height={614}
                width={1230}
                alt="blog-post-image"
                layout="responsive"
                className="rounded-t-md"
              />
              <div className="bg-white p-5 flex flex-col gap-3 shadow-lg rounded-b-md">
                <Link href={`/blog/${item.slug}`}>
                  <h1 className="font-bold text-xl text-headings">
                    {item.title}
                  </h1>
                </Link>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <FaUser className=" text-blue-400" />
                    <span>{item.by.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className=" text-blue-400 text-lg" />
                    <span>{formatDistanceToNow(item._createdAt)} ago</span>
                  </div>
                </div>
                <p className="text-gray-500">{item.summary}</p>
                <Link
                  href={`/blog/${item.slug}`}
                  className="py-2 px-3 text-sm bg-tropicalIndigo rounded hover:bg-headings text-white w-min text-nowrap transition-all ease-in-out duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-10">
        {page && page > 1 && (
          <Link
            href={`/blog?page=${page - 1}&category=${category || ""}`}
            className="py-2 px-3 text-sm bg-gray-200 rounded hover:bg-gray-300"
          >
            Prev
          </Link>
        )}
        {[...Array(totalPages)].map((_, index) => (
          <Link
            key={index}
            href={`/blog?page=${index + 1}&category=${category || ""}`}
            className={`py-2 px-3 text-sm rounded ${
              page === index + 1
                ? "bg-tropicalIndigo text-white"
                : "bg-gray-200 text-gray-500 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </Link>
        ))}
        {page && totalPages && page < totalPages && (
          <Link
            href={`/blog?page=${page + 1}&category=${category || ""}`}
            className="py-2 px-3 text-sm bg-gray-200 rounded hover:bg-gray-300"
          >
            Next
          </Link>
        )}
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Blog | Travel Tips & Transportation Insights | 3B Transport LLC",
  description:
    "Stay updated with the latest travel tips, transportation insights, and news from 3B Transport LLC’s blog. Get expert advice for all your group travel needs across the UAE.",
};
