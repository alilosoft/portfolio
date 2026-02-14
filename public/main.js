// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scroll reveals (optional micro-interaction)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    // section.classList.add('hide'); // Hidden by default if we want scroll reveal
    // observer.observe(section);
});

// Simple Console Greeting
console.log("%c alilosoft %c Dev Portfolio Loaded ", "background: #6366f1; color: white", "background: #1e293b; color: #f1f5f9");
