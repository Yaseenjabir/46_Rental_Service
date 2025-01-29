import { NextResponse } from "next/server";
import { client } from "../../../sanity/lib/client";
const query = `
*[_type == 'blog'] | order(_createdAt desc){
  category,
  summary,
  by->{name},
  image,
  _createdAt,
  title,
  "slug" : slug.current
}`;
export async function GET() {
  try {
    const posts = await client.fetch(query);
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
