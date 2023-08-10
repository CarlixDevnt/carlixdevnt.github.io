// Toggle dark and white themes
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("change", () => {
    body.classList.toggle("dark-theme", themeToggle.checked);
});
