// ===== THEME TOGGLE =====
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// ===== CURRENT YEAR =====
document.getElementById("year").textContent = new Date().getFullYear();
