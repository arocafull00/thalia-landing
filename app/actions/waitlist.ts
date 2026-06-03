"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { isValidEmail, normalizeEmail } from "../lib/validate-email";

export type WaitlistResult =
  | { ok: true }
  | { ok: false; code: "invalid" | "duplicate" | "unknown" };

export async function submitWaitlist(email: string): Promise<WaitlistResult> {
  const normalized = normalizeEmail(email);

  if (!isValidEmail(email)) {
    return { ok: false, code: "invalid" };
  }

  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  ) {
    return { ok: false, code: "unknown" };
  }

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase
    .from("waitlist_signups")
    .insert({ email: normalized });

  if (!error) {
    return { ok: true };
  }

  if (error.code === "23505") {
    return { ok: false, code: "duplicate" };
  }

  return { ok: false, code: "unknown" };
}
