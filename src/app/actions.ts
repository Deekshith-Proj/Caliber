"use server";

import { revalidatePath } from "next/cache";

export async function submitContact(prevState: any, formData: FormData) {
  const data = {
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    projectDetails: formData.get("projectDetails"),
  };

  // Here you would connect to Resend, SendGrid, or your database
  // await sendEmailNotification(data);

  // Simulate network delay for the MVP
  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (!data.email || !data.projectDetails) {
    return { success: false, message: "Email and project details are required." };
  }

  revalidatePath("/");
  return { success: true, message: "Tender details received. Our procurement team will contact you within 24 hours." };
}