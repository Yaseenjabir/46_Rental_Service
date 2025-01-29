import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const queryParam = url.searchParams.get("query");

  const query = `
  *[_type == 'vehicle' && slug.current == '${queryParam}'] {
  name,
  images,
  company,
  capacity,
  manufactured,
  transmission,
  services,
  interior,
  wifi,
  freezer,
  description,
  category,
  perHourRental,
  fullDayRental,
  airportTransfer,
  weeklyRental,
  "slug" : slug.current
}[0]
  `;

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
