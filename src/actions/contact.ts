"use server";

import { z } from "zod";
import { createContact } from "@/src/lib/queries";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export type ContactActionState = {
  success: boolean;
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContact(
  prevState: ContactActionState | null,
  formData: FormData
): Promise<ContactActionState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please correct the errors in the form.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await createContact({
      name: parsed.data.name,
      email: parsed.data.email,
      message: parsed.data.message,
    });

    return {
      success: true,
      message: "Thank you for reaching out! We will get back to you shortly.",
    };
  } catch (err) {
    console.error("Failed to submit contact:", err);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
