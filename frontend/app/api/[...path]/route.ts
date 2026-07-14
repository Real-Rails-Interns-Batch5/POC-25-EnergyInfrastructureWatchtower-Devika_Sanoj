import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: any }
) {
  // Await the params object if it is a Promise in Next.js 15+
  const resolvedParams = await params;
  const path = resolvedParams?.path || [];
  const pathStr = path.join("/");
  const searchParams = request.nextUrl.searchParams.toString();
  const query = searchParams ? `?${searchParams}` : "";

  const backendUrl = process.env.BACKEND_URL || "http://127.0.0.1:8000";
  const targetUrl = `${backendUrl}/api/${pathStr}/${query}`;

  try {
    const res = await fetch(targetUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Backend responded with status: ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to connect to backend service", details: error.message },
      { status: 502 }
    );
  }
}
