// Grab the button element
const themeToggleBtn = document.getElementById('theme-toggle');

// Listen for a click event
themeToggleBtn.addEventListener('click', () => {
    // Toggle the .dark-theme class on the body element
    document.body.classList.toggle('dark-theme');
    
    // Optional: Change button text dynamically
    if (document.body.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = 'Toggle Light Mode';
    } else {
        themeToggleBtn.textContent = 'Toggle Dark Mode';
    }
});
