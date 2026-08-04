// Streamline Strategy intake form config
// Edit and redeploy public pages after changing apiBaseUrl.
window.INTAKE_CONFIG = {
  brandName: "Streamline Strategy",

  // Intake API. Points at the Streamline admin OS (Cloudflare Pages) — the form
  // POSTs submissions to {apiBaseUrl}/api/intakes and they land in the admin
  // "For review" queue. No trailing slash.
  apiBaseUrl: "https://admin.streamlinestrategy.io",

  // Open-source notifications: https://ntfy.sh
  ntfyServer: "https://ntfy.sh",
  ntfyTopic: "gw-intake-058b292d",

  // Optional inbox delivery via FormSubmit.
  notifyEmail: ""
};
