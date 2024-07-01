import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Development from "@/models/Development";

export async function GET() {
  await dbConnect();
  try {
    const developments = await Development.find();
    return NextResponse.json({ success: true, data: developments });
  } catch (error) {
    console.error("Error fetching developments:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 400 }
    );
  }
}
