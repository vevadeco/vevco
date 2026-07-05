import { NextResponse } from "next/server";
import {
  createSessionCookie,
  clearSessionCookie,
  isAuthenticated,
  validateAdminPassword,
} from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (!validateAdminPassword(password)) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(createSessionCookie());
    return response;
  } catch {
    return NextResponse.json(
      { error: "Server misconfigured — set ADMIN_PASSWORD" },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(clearSessionCookie());
  return response;
}
