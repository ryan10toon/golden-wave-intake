// Golden Wave intake form config
// Edit and redeploy (or override before first client).
window.INTAKE_CONFIG = {
  brandName: "Golden Wave",

  // Open-source notifications: https://ntfy.sh
  // Subscribe on phone: ntfy app → subscribe to this topic
  // Or open: https://ntfy.sh/gw-intake-058b292d
  ntfyServer: "https://ntfy.sh",
  ntfyTopic: "gw-intake-058b292d",

  // Optional inbox delivery via FormSubmit (open redirect service).
  // First real submission sends a confirmation email — click it once.
  // Example: "you@goldenwave.example"
  notifyEmail: ""
};
