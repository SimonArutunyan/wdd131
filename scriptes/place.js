// Static values for temperature and wind speed
const temperature = 5; // Example temperature in °C
const windSpeed = 5; // Example wind speed in km/h

// Function to calculate wind chill
function calculateWindChill(temp, speed) {
    return Math.round(13.12 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16));
}

// Display wind chill or N/A based on conditions
function displayWindChill() {
    let windchillElement = document.getElementById("windchill");
    
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChillFactor = calculateWindChill(temperature, windSpeed);
        windchillElement.textContent = `Wind Chill: ${windChillFactor} °C`;
    } else {
        windchillElement.textContent = "Wind Chill: N/A";
    }
}

// Update footer with current year and last modified date
function updateFooter() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById("current-year").textContent = currentYear;
    document.getElementById("last-modified").textContent = lastModified;
}

// Call functions on page load
window.onload = function() {
    displayWindChill();
    updateFooter();
};

// scripts.js
//document.addEventListener('DOMContentLoaded', () => {
//    console.log('Страница загружена и готова к взаимодействию!');
//});