// Configure Google Consent Mode default early (this runs when app.js is parsed if loaded in head, but we also put it in head inline for safety)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-consent-banner");
  if (!banner) return;

  // IMPORTANT: Do not show if Google CMP is active or if user already consented
  // Google CMP adds googlefc to window when active
  if (window.googlefc || typeof window.__tcfapi !== 'undefined') {
    return; // Let Google CMP handle it
  }

  if (!localStorage.getItem("cookie_consent")) {
    banner.classList.remove("hidden");
    // Little delay to ensure sliding in works if we had a hide-translate class
  }

  const acceptBtn = document.getElementById("acceptBtn");
  if (acceptBtn) {
    acceptBtn.onclick = function () {
      localStorage.setItem("cookie_consent", "accepted");
      updateConsent("granted");
      banner.remove();
    };
  }

  const rejectBtn = document.getElementById("rejectBtn");
  if (rejectBtn) {
    rejectBtn.onclick = function () {
      localStorage.setItem("cookie_consent", "rejected");
      updateConsent("denied");
      banner.remove();
    };
  }

  const manageBtn = document.getElementById("manageBtn");
  if (manageBtn) {
    manageBtn.onclick = function () {
      // Just reject all non-essentials in this basic flow, or take to policy
      window.location.href = "/privacy-policy";
    };
  }
});

function updateConsent(status) {
  gtag('consent', 'update', {
    ad_storage: status,
    analytics_storage: status,
    ad_user_data: status,
    ad_personalization: status
  });
}
