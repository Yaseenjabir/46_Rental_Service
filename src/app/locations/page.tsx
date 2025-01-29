import Image from "next/image";
import BreadCrumbs from "../components/Main/BreadCrumbs/BreadCrumbs";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Location } from "../utils/utils";
import { PortableText } from "next-sanity";

export default async function Locations({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = parseInt(page as string) || 1;
  const limit = 5;

  const locations: Location[] = await fetchData();

  const totalLocations = locations.length;
  const totalPages = Math.ceil(totalLocations / limit);
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const locationsForPage = locations.slice(startIndex, endIndex);

  return (
    <>
      <BreadCrumbs data={{ title: "Locations", crumb: "locations" }} />
      <main className="w-full max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto">
        <div className="w-full grid grid-cols-1 gap-5 px-5 md:px-0 py-10 md:grid-cols-2 lg:grid-cols-3">
          {locationsForPage &&
            locationsForPage.map((item: Location, index) => {
              return (
                <div key={index} className="w-full ">
                  <Image
                    width={460}
                    height={616}
                    alt="location-image"
                    className="h-[300px] w-full rounded-t-2xl"
                    src={urlFor(item.image).width(460).url()}
                  />
                  <div className="p-7 bg-white rounded-b-2xl flex flex-col gap-3 shadow-lg">
                    <h1 className="font-semibold text-gray-600 text-lg">
                      {item.locationName}
                    </h1>
                    <section className="text-gray-400 h-12 overflow-hidden">
                      <PortableText value={item.description} />
                    </section>
                    <Link
                      href={`/locations/${item.slug}`}
                      className="py-2 px-3 bg-tropicalIndigo rounded-md text-white w-min text-nowrap hover:bg-headings transition-all ease-in-out duration-300"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center gap-2 mb-10">
          {currentPage > 1 && (
            <Link
              href={`/locations?page=${currentPage - 1}`}
              className="py-2 px-3 text-sm bg-gray-200 rounded hover:bg-gray-300"
            >
              Prev
            </Link>
          )}

          {[...Array(totalPages)].map((_, index) => (
            <Link
              key={index}
              href={`/locations?page=${index + 1}`}
              className={`py-2 px-3 text-sm rounded ${
                currentPage === index + 1
                  ? "bg-tropicalIndigo text-white"
                  : "bg-gray-200 text-gray-500 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </Link>
          ))}

          {currentPage < totalPages && (
            <Link
              href={`/locations?page=${currentPage + 1}`}
              className="py-2 px-3 text-sm bg-gray-200 rounded hover:bg-gray-300"
            >
              Next
            </Link>
          )}
        </div>
      </main>
    </>
  );
}

// Existing fetchData function remains the same
async function fetchData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getAllLocations`
    );
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}
