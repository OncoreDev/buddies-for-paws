import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const mailchimpData = new URLSearchParams();
  formData.forEach((value, key) => mailchimpData.append(key, value.toString()));

  const res = await fetch(
    "https://bonkforpaws.us16.list-manage.com/subscribe/post",
    {
      method: "POST",
      body: mailchimpData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );

  const text = await res.text();
  return NextResponse.json({ success: res.ok, html: text });
}
