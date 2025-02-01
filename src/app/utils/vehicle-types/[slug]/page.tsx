import FleetsList from "@/app/components/Main/Fleets/FleetsList";
import DynamicCrumbs from "@/app/fleets/[slug]/DynamicCrumbs";
import { Vehicle } from "@/app/utils/utils";
import { client } from "@/sanity/lib/client";

export async function generateStaticParams() {
  const query = `*[_type == "vehicle"]{
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
  const query = `
  *[_type == "vehicle" && vehicleType == "${slug}"]{
    vehicleType,
    brand,
    name,
}[0]`;

  const res = await client.fetch(query);

  const description = `Looking for a top-quality ${slug} vehicle? Check out the ${res.brand} ${res.name}, the perfect choice for luxury group travel in Dubai. This 30-40 seater bus rental offers comfort, reliability, and style, making it an ideal option for events, corporate functions, and large gatherings. Book your ${slug} vehicle today for a seamless experience in Dubai.`;

  return {
    title: `${res.brand} ${res.name} - Rent Luxury Buses in Dubai`,
    description: description,
  };
}

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
    manufactured,
    capacity,
    transmission,
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
              secondCrumb: {
                name: slug.charAt(0).toUpperCase() + slug.slice(1),
                link: "",
              },
            }}
          />
          <div className="w-full max-w-[720px] lg:max-w-[980px] xl:max-w-[1160px] py-10 px-5">
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
