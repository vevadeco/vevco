import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const SESSION_COOKIE = "vevadeco_admin";
const SESSION_VERSION = "v1";

export function getAdminPassword(): string | null {
  return process.env.ADMIN_PASSWORD ?? null;
}

function getAuthSecret(): string {
  const password = getAdminPassword();
  if (password) return password;

  if (process.env.NODE_ENV === "production") {
    throw new Error("ADMIN_PASSWORD environment variable is required in production");
  }

  return "dev-only-insecure-secret";
}

function createSessionToken(): string {
  return createHmac("sha256", getAuthSecret())
    .update(SESSION_VERSION)
    .digest("hex");
}

function verifySessionToken(token: string): boolean {
  try {
    const expected = createSessionToken();
    const a = Buffer.from(token);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return false;
  return verifySessionToken(token);
}

export function createSessionCookie() {
  return {
    name: SESSION_COOKIE,
    value: createSessionToken(),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  };
}

export function clearSessionCookie() {
  return {
    name: SESSION_COOKIE,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    maxAge: 0,
    path: "/",
  };
}

export function validateAdminPassword(password: string): boolean {
  const expected = getAdminPassword();
  if (!expected) {
    // Dev fallback
    if (process.env.NODE_ENV !== "production") {
      return password === "vevadeco2026";
    }
    return false;
  }

  try {
    const a = Buffer.from(password);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}
