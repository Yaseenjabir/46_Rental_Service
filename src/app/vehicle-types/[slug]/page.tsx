import FleetsList from "@/app/components/Main/Fleets/FleetsList";
import DynamicCrumbs from "@/app/fleets/[slug]/DynamicCrumbs";
import { Vehicle } from "@/app/utils/utils";
import { client } from "@/sanity/lib/client";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const query = `
  *[_type == "vehicle" && vehicleType == "${slug}"]{
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

  async function fetchData() {
    const res = await client.fetch(query);
    return res;
  }

  const data: Vehicle[] = await fetchData();

  return (
    <>
      {data.length > 0 ? (
        <section className="w-full flex flex-col items-center justify-center">
          <DynamicCrumbs
            data={{
              firstCrumb: { name: "Vehicle Types", link: "/vehicle-types" },
              secondCrumb: { name: slug, link: "" },
            }}
          />
          <div className="w-full max-w-[720px] lg:max-w-[980px] xl:max-w-[960px] py-10 px-5">
            {data !== undefined && <FleetsList data={data} />}
          </div>
        </section>
      ) : (
        <section className="w-full items-center justify-center flex h-[50vh]">
          <h1 className="text-3xl px-3 text-gray-600">
            No data available for{" "}
            <span className="text-headings font-semibold">{slug}</span>
          </h1>
        </section>
      )}
    </>
  );
}
