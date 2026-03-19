// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme-mode");

if (savedTheme === "light") {
  body.classList.add("light-mode");
  themeToggle?.classList.add("active");
}

themeToggle?.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  themeToggle.classList.toggle("active");
  localStorage.setItem("theme-mode", body.classList.contains("light-mode") ? "light" : "dark");
});

// Booking widget
function openBookingWidget() {
  if (typeof SBUI !== "undefined" && SBUI.showBookingWidget) {
    SBUI.showBookingWidget();
  }
}

document.querySelectorAll(".book-btn").forEach(btn => {
  btn.addEventListener("click", (e) => { e.preventDefault(); openBookingWidget(); });
});

// Enquiry pop-up
document.querySelectorAll(".enquiry-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    window.open("https://form.jotform.com/51562311137345", "enquiryForm", "width=700,height=750,left=300,top=80");
  });
});

// Floating CTAs
document.querySelector(".floating-book")?.addEventListener("click", (e) => { e.preventDefault(); openBookingWidget(); });
document.querySelector(".floating-enquire")?.addEventListener("click", () => {
  window.open("https://form.jotform.com/51562311137345", "enquiryForm", "width=700,height=750,left=300,top=80");
});

// Active nav
const page = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("nav ul li a").forEach(link => {
  if (link.getAttribute("href") === page) link.classList.add("active");
});

// Sticky nav shadow
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  nav.style.boxShadow = window.scrollY > 50 ? "0 4px 18px rgba(0,0,0,0.25)" : "none";
});

// Fade-in animations
document.querySelectorAll(".fade-in").forEach(el => {
  new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
  }, { threshold: 0.25 }).observe(el);
});
