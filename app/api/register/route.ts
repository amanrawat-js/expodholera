import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Registration from "@/models/Registration";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, city, type, company, message } = body;

    // Basic server-side validation
    if (!name || !email || !phone || !city || !type) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    await connectDB();

    const registration = await Registration.create({
      name,
      email,
      phone,
      city,
      type,
      company: company || "",
      message: message || "",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Registration successful!",
        id: registration._id,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    console.error("[register API]", err);

    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
