// temples.js

// Function to update the footer with the current year and last modified date
function updateFooter() {
    const currentYear = new Date().getFullYear();
    const lastModified = new Date(document.lastModified).toLocaleDateString();
    
    document.getElementById('current-year').textContent = currentYear;
    document.getElementById('last-modified').textContent = lastModified;
}

// Hamburger menu functionality
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('visible');
    const hamburger = document.getElementById('hamburger');
    hamburger.textContent = navMenu.classList.contains('visible') ? '✖' : '☰';
}

// Event listener for the hamburger button
document.getElementById('hamburger').addEventListener('click', toggleMenu);

// Run the footer update function when the script loads
updateFooter();