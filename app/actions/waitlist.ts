"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export type WaitlistResult =
  | { ok: true }
  | { ok: false; code: "invalid" | "duplicate" | "unknown" };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitWaitlist(email: string): Promise<WaitlistResult> {
  const normalized = email.trim().toLowerCase();

  if (!normalized || !emailPattern.test(normalized)) {
    return { ok: false, code: "invalid" };
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
