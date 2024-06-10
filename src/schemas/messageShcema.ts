import { z } from "zod";

export const messageSchema = z.object({
  acceptMessages: z
    .string()
    .min(10, { message: "Content must be at least 10 characters or higher" })
    .max(303, { message: "Content Must not be longer than 300 characters" }),
});
