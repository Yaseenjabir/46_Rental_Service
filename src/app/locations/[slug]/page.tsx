import { Location } from "@/app/utils/utils";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import MapComponent from "@/app/components/MapComponent";
import FleetsList from "@/app/components/Main/Fleets/FleetsList";
import DynamicCrumbs from "@/app/fleets/[slug]/DynamicCrumbs";

export async function generateStaticParams() {
  const query = `
  *[_type == "location"]{
  "slug" : slug.current
  }`;

  const data = await client.fetch(query);
  return data.map((item: Location) => ({ params: { slug: item.slug } }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const query = `*[_type == "location" && slug.current == "${slug}"] {
    locationName,
    description
  }[0]`;

  const data = await client.fetch(query);

  return {
    title: `${data?.locationName} | Locations for Bus Rental | 3B Transport LLC`,
    description: `Explore the details of ${data?.locationName}. Find out about the available bus rental services and fleets at this location, perfect for your transportation needs in the UAE.`,
  };
}

export default async function CityName({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const query = `*[_type == "location" && slug.current == "${slug}"] {
  image,
  locationName,
  locationType,
  description,
  latitude,
  longitude,
  "vehicles": *[_type == "vehicle" && location == ^.locationType]{
  vehicleType,
  brand,
  images[0],
  name,
  transmission,
  manufactured,
  capacity,
  perHourRental,
  fullDayRental,
  airportTransfer,
  weeklyRental,
  "slug" : slug.current
  }    
}[0]
  `;

  const data: Location = await client.fetch(query);

  return (
    <>
      <DynamicCrumbs
        data={{
          firstCrumb: { name: "Locations", link: "/locations" },
          secondCrumb: { name: data && data.locationName, link: "" },
        }}
      />
      {data && (
        <section className="w-full py-10 px-5 max-w-[720px] lg:max-w-[960px] mx-auto">
          <div className="bg-white font-sans text-gray-900">
            <Image
              height={614}
              width={1130}
              alt="location-pic"
              className="rounded"
              src={data && urlFor(data?.image).width(1130).url()}
            />
            <section className="section-portable px-5 py-5">
              <PortableText value={data.description} />
            </section>
          </div>
          <div
            style={{ height: "300px", width: "100%" }}
            className="z-10 relative p-3 bg-white rounded-lg my-5"
          >
            <MapComponent latitude={data.latitude} longitude={data.longitude} />
          </div>
          {data.vehicles.length === 0 ? (
            <h1 className="font-semibold text-center text-2xl text-headings mb-5 mt-10">
              No fleets available for {data.locationType}
            </h1>
          ) : (
            <div className="py-10">
              <h1 className="font-semibold text-center text-2xl text-headings mb-5">
                Fleets available in {data.locationType}
              </h1>
              <FleetsList data={data && data.vehicles} />
            </div>
          )}
        </section>
      )}
    </>
  );
}
