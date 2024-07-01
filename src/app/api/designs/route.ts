import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Design from "@/models/Design";

export async function GET() {
  await dbConnect();
  try {
    const designs = await Design.find();
    return NextResponse.json({ success: true, data: designs });
  } catch (error) {
    console.error("Error fetching designs:", error);
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
