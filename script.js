// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Display a greeting based on the time of day
const greetingMessage = document.getElementById("greeting-message");
const currentHour = new Date().getHours();
if (currentHour < 12) {
    greetingMessage.innerText = "Good morning! Find your next great read.";
} else if (currentHour < 18) {
    greetingMessage.innerText = "Good afternoon! Discover amazing books.";
} else {
    greetingMessage.innerText = "Good evening! Unwind with a book tonight.";
}

// Form validation for Contact Us form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const subject = document.getElementById('subject').value.trim();
    if (fname === "" || lname === "" || subject === "") {
        alert("Please fill out all required fields.");
        event.preventDefault();
    }
});
