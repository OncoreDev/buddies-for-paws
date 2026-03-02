import { z } from "zod";

export const contactUsFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required 🐾"),
  lastName: z.string().trim().min(1, "Last name is required 🐾"),
  email: z
    .string()
    .trim()
    .email("Oops! That doesn't look like a valid email address 😊")
    .refine(
      (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      "Hmm, that email seems off. Double-check the format 🧐",
    ),
  message: z
    .string()
    .min(1, "We'd love to hear from you! Please enter your message 🐾")
    .max(
      1000,
      "Your message is a bit too long, but we appreciate your enthusiasm!",
    ),
});

export type ContactUsForm = z.infer<typeof contactUsFormSchema>;
