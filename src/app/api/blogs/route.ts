import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const res = await fetch("https://dummyapi.online/api/blogposts");
    const data = await res.json();
    return NextResponse.json(data);
}
