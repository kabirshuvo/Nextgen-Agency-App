// app/api/users/toggle-admin.ts
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User.model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { userId } = req.body;

  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    user.isAdmin = !user.isAdmin;
    await user.save();

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error toggling admin status:", error);
    res
      .status(500)
      .json({ success: false, message: "Error toggling admin status" });
  }
}
