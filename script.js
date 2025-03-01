// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Inquiry Sent!");
    }
});

// Fade-in Animation on Scroll
const fadeElements = document.querySelectorAll(".fade-in");

function handleScroll() {
    fadeElements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.85) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", handleScroll);
