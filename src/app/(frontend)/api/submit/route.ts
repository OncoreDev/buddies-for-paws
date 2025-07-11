import { contactUsFormSchema } from "@/lib/schema/contact-us-form-schema";
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const json = await req.json();
  const parsed = contactUsFormSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", errors: parsed.error.errors },
      { status: 400 },
    );
  }

  const body = parsed.data;
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const now = new Date();
    const dateTimeString = now.toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:C1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[dateTimeString, body.email, body.message]],
      },
    });

    return NextResponse.json(
      { message: "Successfully sent!", data: response.data },
      { status: 200 },
    );
  } catch (e: any) {
    return NextResponse.json(
      { message: "Failed to submit form", error: e.message },
      { status: 500 },
    );
  }
}
