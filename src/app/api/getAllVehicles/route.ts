import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

const query = `
*[_type == 'vehicle']{
    location,
    vehicleType,
    brand,
    images[0],
    name,
    perHourRental,
    fullDayRental,
    airportTransfer,
    weeklyRental,
    "slug" : slug.current
}
`;

export async function GET() {
  try {
    const result = await client.fetch(query);

    return NextResponse.json(result, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
