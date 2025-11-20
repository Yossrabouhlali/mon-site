// Menu toggle mobile
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// Formulaire de contact simulé
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    message.textContent = "Merci pour votre message ! Je vous répondrai bientôt.";
    form.reset();
});

// Animation au scroll
const sections = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));
