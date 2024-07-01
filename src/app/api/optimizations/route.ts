import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Optimization from "@/models/Optimization";

export async function GET() {
  await dbConnect();
  try {
    const optimizations = await Optimization.find();
    return NextResponse.json({ success: true, data: optimizations });
  } catch (error) {
    console.error("Error fetching optimizations:", error);
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
