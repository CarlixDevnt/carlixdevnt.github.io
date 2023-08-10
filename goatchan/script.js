// Toggle light and dark themes
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    if (body.classList.contains("dark-theme")) {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// ... (previous code)

// Get the saved theme preference (if available) or default to light theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    document.getElementById('theme-icon').classList.add('fa-moon');
} else {
    document.getElementById('theme-icon').classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    const themeIcon = document.getElementById('theme-icon');
    themeIcon.classList.toggle('fa-sun', !body.classList.contains('dark-theme'));
    themeIcon.classList.toggle('fa-moon', body.classList.contains('dark-theme'));
    
    // Save the user's preference to local storage
    const newTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
});
