import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import MessageModel from "@/models/Message.model"; // Make sure you have a Message model
import UserModel from "@/models/User.model"; // Assuming you are using User model for creating new users

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    const { name, email, message } = await request.json();

    const newMessage = new MessageModel({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    await newMessage.save();

    return NextResponse.json({
      success: true,
      message: "Message saved successfully",
    });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json(
      { success: false, message: "Error saving message" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  await dbConnect();

  try {
    const messages = await MessageModel.find().sort({ createdAt: -1 }).exec();
    return NextResponse.json({ success: true, messages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { success: false, message: "Error fetching messages" },
      { status: 500 }
    );
  }
}
