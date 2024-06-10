import { z } from "zod";

// Define regex patterns
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;

// Define the Zod schema for username validation
export const userNameValidation = z.object({
  username: z
    .string()
    .min(2, "Username must be at least 2 characters")
    .max(20, "Username should not exceed 20 characters")
    .regex(
      usernameRegex,
      "Username must be 3-20 characters long and can only contain letters, numbers, underscores, and hyphens"
    ),
});

// Define the Zod schema for email validation
export const emailValidation = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .regex(emailRegex, "Please use a valid email address"),
});

const passwordValidation = z.object({
  password: z
    .string()
    .min(6, { message: "Password Must be at least 6 characters" }),
});

// Define the Zod schema for user signup validation
const signUpSchema = z.object({
  username: userNameValidation.shape.username,
  email: emailValidation.shape.email,
  password: passwordValidation.shape.password,
});

export default signUpSchema;
