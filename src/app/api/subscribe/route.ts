// src/app/api/subscribe/route.ts
import dbConnect from "@/lib/dbConnect";
import SubscriberModel from "@/models/Subscriber.model";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { email } = await request.json();

    // Check if the email is already subscribed
    const existingSubscriber = await SubscriberModel.findOne({ email });

    if (existingSubscriber) {
      return NextResponse.json(
        { success: false, message: "Email is already subscribed" },
        { status: 400 }
      );
    }

    // Create a new subscriber
    const newSubscriber = new SubscriberModel({
      email,
      subscribeDate: new Date(),
    });
    await newSubscriber.save();

    return NextResponse.json(
      { success: true, message: "Subscribed successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error subscribing user", error);
    return NextResponse.json(
      { success: false, message: "Error subscribing user" },
      { status: 500 }
    );
  }
}
