console.log("JavaScript Loaded");

document.getElementById('navbarToggle').addEventListener('click', function() {
    const navbarMenu = document.getElementById('navbarMenu');
    navbarMenu.classList.toggle('active');
    console.log("Toggle button clicked"); // Check if the click is detected
});
