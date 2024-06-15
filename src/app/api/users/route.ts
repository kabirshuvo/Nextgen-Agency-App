import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User.model";
import { NextResponse } from "next/server";

// Function to handle GET requests
export async function GET() {
  await dbConnect();

  try {
    const users = await UserModel.find({});
    return NextResponse.json({
      success: true,
      users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error fetching users",
      },
      { status: 500 }
    );
  }
}
