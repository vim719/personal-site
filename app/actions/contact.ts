"use server";

export type ContactState = {
  ok: boolean;
  message: string;
};

const initial: ContactState = { ok: false, message: "" };

export async function submitCaseStudyRequest(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const email = formData.get("email");
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  // Wire to Resend, Slack, or your CRM by setting env and extending here.
  if (process.env.CONTACT_WEBHOOK_URL) {
    try {
      await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "case_study_access",
          email: email.trim(),
          at: new Date().toISOString(),
        }),
      });
    } catch {
      return {
        ok: false,
        message: "Could not send right now. Please email directly.",
      };
    }
  }

  return {
    ok: true,
    message: "Thanks — we will follow up shortly.",
  };
}

export const contactInitialState: ContactState = initial;
