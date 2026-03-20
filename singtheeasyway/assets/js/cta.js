// ======================================
// CTA BUTTON BEHAVIOUR
// ======================================

// BOOKING BUTTONS
const bookButtons = document.querySelectorAll(".book-btn");

// Replace this URL with your real SimplyBook booking link
const bookingURL = "https://your-simplybook-link-goes-here.com";

bookButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        window.open(bookingURL, "_blank");
    });
});

// ENQUIRY BUTTONS
const enquiryButtons = document.querySelectorAll(".enquiry-btn");

// Replace this with your real JotForm link
const enquiryFormURL = "https://your-jotform-link-goes-here.com";

enquiryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        window.open(enquiryFormURL, "_blank");
    });
});