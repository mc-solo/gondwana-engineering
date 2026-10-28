// ---------------------------------------------------------------------------
// FUTURE EMAIL INTEGRATION — NOT IMPLEMENTED YET
// ---------------------------------------------------------------------------
// This file is deliberately a clean placeholder. Do not add a paid provider,
// API key or real delivery here until the client chooses one.
//
// When email is approved, implement one function in this file:
//
//   export async function sendContactEmail({ name, email, subject, message })
//
// and set EMAIL_PROVIDER in the environment (for example "resend", "smtp" or
// "sendgrid"). Until then, `isEmailConfigured()` stays false and the API
// returns an honest demo response instead of claiming delivery.
// ---------------------------------------------------------------------------

export function isEmailConfigured() {
  return Boolean(process.env.EMAIL_PROVIDER)
}

export async function sendContactEmail() {
  throw new Error('Email delivery is not configured. Set EMAIL_PROVIDER and implement sendContactEmail().')
}
