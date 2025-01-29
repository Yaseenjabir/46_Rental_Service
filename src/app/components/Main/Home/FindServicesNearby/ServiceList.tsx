import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Vehicle } from "@/app/utils/utils";
import FleetsList from "../../Fleets/FleetsList";

export async function generateStaticParams() {
  const vehicles = await fetchData();
  return vehicles.map((post: Vehicle) => ({
    slug: post.slug,
  }));
}

async function fetchData() {
  const res = await client.fetch(query);
  return res;
}

const query = `*[_type == "vehicle"][0..2] {
 vehicleType,
 brand,
 images[0],
 name,
 perHourRental,
 fullDayRental,
 airportTransfer,
 weeklyRental,
 "slug" : slug.current
}`;
export default async function ServiceList() {
  const data: Vehicle[] = await fetchData();

  return (
    <div className="w-full max-w-[720px] lg:max-w-[980px] xl:max-w-[1160px] flex flex-col gap-10">
      {data.length > 0 && <FleetsList data={data} />}
      <div
        className="h-[400px] w-full rounded-2xl relative before:content-[''] before:absolute before:top-0 before:right-0 before:h-full before:w-full before:bg-[#00000048] before:rounded-xl"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1473655587843-eda8944061e8?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-4xl">
          More Ideas
        </h1>
        <Link
          href="/fleets"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white rounded-full border border-white py-2 px-5 hover:text-tropicalIndigo hover:bg-white transition-all ease-in-out duration-300"
        >
          View More
        </Link>
      </div>
    </div>
  );
}
