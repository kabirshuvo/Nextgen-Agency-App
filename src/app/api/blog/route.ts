// src/app/api/blog/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import BlogPost from "@/models/BlogPost";

export async function GET() {
  await dbConnect();
  try {
    const posts = await BlogPost.find({});
    return NextResponse.json({ success: true, data: posts });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
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

export async function POST(req: Request) {
  await dbConnect();
  try {
    const { title, summary, content, imageUrl } = await req.json();
    const newPost = await BlogPost.create({
      title,
      summary,
      content,
      imageUrl,
    });
    return NextResponse.json({ success: true, data: newPost }, { status: 201 });
  } catch (error) {
    console.error("Error creating blog post:", error);
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

export async function DELETE(req: Request) {
  await dbConnect();
  try {
    const { id } = await req.json();
    await BlogPost.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting blog post:", error);
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
