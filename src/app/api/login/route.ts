import { NextRequest, NextResponse } from "next/server";

const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
const token = process.env.NEXT_PUBLIC_ADMIN_ADMIN_TOKEN;

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Please provide both email and password" },
      { status: 400 }
    );
  }

  if (email !== adminEmail) {
    return NextResponse.json(
      { error: "Please write a valid email" },
      { status: 400 }
    );
  }
  if (password !== adminPassword) {
    return NextResponse.json(
      { error: "Please write a valid password" },
      { status: 400 }
    );
  }

  const response = NextResponse.json({ success: true }, { status: 200 });
  response.cookies.set("auth-token", token ? token : "", {
    httpOnly: true,
    maxAge: 60 * 60 * 24, // 1 day in seconds
    path: "/",
  });

  return response;
}
