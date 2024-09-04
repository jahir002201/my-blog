import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const res = await fetch(`https://dummyapi.online/api/blogposts?page=${page}&limit=${limit}`);
    const data = await res.json();
    
    return NextResponse.json(data);
}
