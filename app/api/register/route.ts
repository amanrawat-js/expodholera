import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Registration from "@/models/Registration";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, /* city, */ type, company, message, recaptchaToken } = body;

    // --- reCAPTCHA verification ---
    if (!recaptchaToken) {
      return NextResponse.json(
        { success: false, error: "reCAPTCHA token is missing." },
        { status: 400 }
      );
    }

    const recaptchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      { method: "POST" }
    );
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success) {
      return NextResponse.json(
        { success: false, error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }
    // --- end reCAPTCHA verification ---

    // Basic server-side validation
    if (!name || !email || !phone || !type) {
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
      // city,
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
